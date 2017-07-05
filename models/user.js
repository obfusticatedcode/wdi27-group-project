const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//comments
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});


const userSchema = new mongoose.Schema({
  firstName: {type: String },
  lastName: {type: String },
  image: {type: String },
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
