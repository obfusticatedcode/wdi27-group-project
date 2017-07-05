const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

//comments
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});


const userSchema = new mongoose.Schema({
  firstName: {type: String },
  lastName: {type: String },
  image: {type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4LcbfB9GWwypdalbf9DxRoIxdk8x578SKYIy0CfnF_nj3tzdiwHcG4c' },
  location: { lat: Number, lng: Number },
  email: { type: String, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String },
  facebookId: { type: Number },
  instagramId: { type: Number },
  comments: [ commentSchema ]
});

userSchema
.virtual('passwordConfirmation')
.set(function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
});

userSchema.virtual('imageSRC')
.get(function getImageSRC(){
  if(!this.image) return null;
  if(this.image.match(/^http/)) return this.image;
  return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
});

userSchema.pre('remove', function removeImage(next) {
  if(this.image) return s3.deleteObject({ Key: this.image }, next);
  next();
});

userSchema.pre('remove', function removeUserPosts(next) {
  this.model('Campaign').remove({ createdBy: this.id }, next);
});

userSchema
  .virtual('campaigns', {
    ref: 'Campaign',
    localField: '_id',
    foreignField: 'createdBy'
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.facebookId && !this.instagramId) {
    this.invalidate('password', 'required');
  }


  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
