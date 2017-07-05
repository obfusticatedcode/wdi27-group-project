const mongoose = require('mongoose');
const nodemailer = require('../lib/nodemailer');
const User = require('../models/user');
const geolib = require('geolib');

// define categorySchema
const categorySchema = new mongoose.Schema({
  name: { type: String },
  people: { type: Number }
});



const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  location: { lat: Number, lng: Number },
  campaignType: { type: String },
  people: { type: Number },
  description: { type: String },
  expiryDate: { type: Date },
  isAvailable: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  categories: [ categorySchema ]
}, {
  timestamps: true
});

campaignSchema.post('save', function sendMail(next) {
  User
    .find()
    .exec()
    .then((users) => {
      const suitableUsers = nodemailer.findSuitableUsers(users, this);
      return suitableUsers.forEach((item) => {
        // Return false if registered user does not have location data (due to oAuth login)
        if (!item) return false;

        const configEmail = nodemailer.configEmail(this, item);
        return nodemailer.sendMail(configEmail);
      });
    })
    .catch(next);
});

module.exports = mongoose.model('Campaign', campaignSchema);
