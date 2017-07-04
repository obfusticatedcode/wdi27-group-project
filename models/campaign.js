const mongoose = require('mongoose');
const nodemailer = require('../lib/nodemailer');
const User = require('../models/user');
const geolib = require('geolib');

// define categorySchema
const categorySchema = new mongoose.Schema({
  name: { type: String },
  amount: { type: Number }
});

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: { lat: Number, lng: Number },
  campaignType: { type: String },
  people: { type: Number },
  description: { type: String },
  date: { type: Date },
  isAvailable: { type: Boolean },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  category: { type: String }
}, {
  timestamps: true
});

campaignSchema.post('save', function sendMail(next) {
  console.log('LOCATION: ', this.location);
  console.log('CAMPAIGN DETAILS: ', this);

  User
    .find()
    .exec()
    .then((users) => {
      // Loop through users
      return users.forEach((user) => {

        // Return false if registered user does not have location data (due to oAuth login)
        if (!user['location'].lat && !user['location'].lng) return false;

        // Calculate the distance between the campaign posted and users registered location
        const distance = geolib.getDistance(
          user.location,
          this.location
        );

        console.log('Distance from: ', distance);

        // I
        if(distance < 25000) {
          const emailConfig = {
            from: `"Tim Rooke" <${process.env.GMAIL_ADDRESS}>`, // sender address
            to: `${user.email}`, // list of receivers
            subject: `${this.createdBy.username} needs your help!`, // Subject line
            text: `${this.createdBy.username} is looking for your help. They are only ${distance} away from you!`, // plain text body
            html: `<h3>${this.createdBy.username} is looking for your help. They are only ${distance} meters away from you!</h3><br>
                  <b>${this.description}</b>` // html body
          };

          return nodemailer.sendMail(emailConfig);
        }

      });
    })
    .catch(next);
});


module.exports = mongoose.model('Campaign', campaignSchema);
