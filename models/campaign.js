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
  date: { type: Date },
  isAvailable: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  category: [ categorySchema ]
}, {
  timestamps: true
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
            subject: `Help ${this.createdBy.username} today`, // Subject line
            text: `${this.createdBy.firstName} ${this.createdBy.lastName} is looking for your help.`, // plain text body
            html: `<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class="bgBody"><tr><td><table cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-collapse:collapse;"><tr><td class="movableContentContainer"><div class="movableContent"><table cellpadding="0" cellspacing="0" border="0" align="center" width="600"><tr height="40"><td width="200">&nbsp;</td><td width="200">&nbsp;</td><td width="200">&nbsp;</td></tr><tr><td width="200" valign="top">&nbsp;</td><td width="200" valign="top" align="center"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable"><img src="${this.createdBy.image}" style="border-radius: 50%" width="155" height="155" alt="Logo" data-default="placeholder"/></div></div></td><td width="200" valign="top">&nbsp;</td></tr><tr height="25"><td width="200">&nbsp;</td><td width="200">&nbsp;</td><td width="200">&nbsp;</td></tr></table></div><div class="movableContent"><table cellpadding="0" cellspacing="0" border="0" align="center" width="600"><tr><td width="100%" colspan="3" align="center" style="padding-bottom:10px;padding-top:25px;"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><h2>${this.createdBy.firstName} ${this.createdBy.lastName} is looking for your help near you.</h2><div><img width="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=${this.location.lat},${this.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:A%7C${this.location.lat},${this.location.lng}&key=AIzaSyCcWl8R2Zciexw1WhPtuTVWGeqt6XQ1S5I" alt="Google Map"></div></div></div></td></tr><tr><td width="100%" colspan="3" align="center" style="padding-bottom:10px;padding-top:25px;"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><h4><em>They are only ${(distance/1000).toFixed(1) } km away from you.</em></h4></div></div></td></tr><tr><td width="100">&nbsp;</td><td width="400" align="center" style="padding-bottom:5px;"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><p>${this.description}</p></div></div></td><td width="100">&nbsp;</td></tr></table></div><div class="movableContent"><table cellpadding="0" cellspacing="0" border="0" align="center" width="600"><tr><td width="100">&nbsp;</td><td width="400" align="center" style="padding-top:25px;padding-bottom:115px;"><table cellpadding="0" cellspacing="0" border="0" align="center" width="200" height="50"><tr><td bgcolor="#ED006F" align="center" style="border-radius:4px;" width="200" height="50"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><a target="_blank" href="http://localhost:7000/campaigns/${this.id}" class="link2" style="color:white; text-decoration:none; font-weight:bold">Help out now!</a></div></div></td></tr></table></td><td width="100">&nbsp;</td></tr></table></div></td></tr></table></td></tr></table>`
          };

          return nodemailer.sendMail(emailConfig);
        }

      });
    })
    .catch(next);
});


module.exports = mongoose.model('Campaign', campaignSchema);
