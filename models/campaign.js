const mongoose = require('mongoose');
const nodemailer = require('../lib/nodemailer');
const User = require('../models/user');
const geolib = require('geolib');
const s3 = require('../lib/s3');

// define categorySchema
const categorySchema = new mongoose.Schema({
  name: { type: String },
  people: { type: Number }
});



const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  address: { type: String },
  location: { lat: Number, lng: Number },
  campaignType: { type: String },
  people: { type: Number },
  description: { type: String },
  expiryDate: { type: Date },
  isAvailable: { type: Boolean },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  categories: [ categorySchema ]
}, {
  timestamps: true
});

campaignSchema.virtual('imageSRC')
.get(function getImageSRC(){
  if(!this.image) return null;
  if(this.image.match(/^http/)) return this.image;
  return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
});

campaignSchema.pre('remove', function removeImage(next) {
  if(this.image) return s3.deleteObject({ Key: this.image }, next);
  next();
});



campaignSchema.post('save', function sendMail(next) {
  // console.log('LOCATION: ', this.location);
  // console.log('CAMPAIGN DETAILS: ', this);

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
          from: `"Disaster Relief" <${process.env.GMAIL_ADDRESS}>`, // sender address
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
