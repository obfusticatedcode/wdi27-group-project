const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const userSchema = new mongoose.Schema({
  firstName: {type: String },
  lastName: {type: String },
  image: {type: String },
  location: { lat: Number, lng: Number },
  email: { type: String, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String },
  facebookId: { type: Number },
  instagramId: { type: Number }
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
