const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {type: String },
  lastName: {type: String },
  image: {type: String },
  email: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String }
});


module.exports = mongoose.model('User', userSchema);
