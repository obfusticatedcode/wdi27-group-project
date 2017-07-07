const nodemailer = require('nodemailer');
const geolib = require('geolib');

function findSuitableUsers(users, campaign) {
  // Should really use .filter, not .map!
  return users.map((user) => {
    // Return false if registered user does not have location data (due to oAuth login)

    if (!user['location'].lat && !user['location'].lng) return false;

    // Calculate the distance between the campaign posted and users registered location
    const distance = geolib.getDistance(user.location, campaign.location);
    console.log('User >>> ', distance);
    // Check is user is within 25km radius of the post
    if(distance < 25000 && campaign.isAvailable) return { user, distance };

  });
}

function configEmail(user, campaign) {

  const emailConfig = {
    from: `"Disaster Relief" <${process.env.GMAIL_ADDRESS}>`, // sender address
    to: `${campaign.user.email}`, // list of receivers
    subject: `Help ${user.createdBy.username} today`, // Subject line
    text: `${user.createdBy.username} is looking for your help.`, // plain text body
    html: `<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class="bgBody"><tr><td><table cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-collapse:collapse;"><tr><td class="movableContentContainer"><div class="movableContent"><table cellpadding="0" cellspacing="0" border="0" align="center" width="600"><tr height="40"><td width="200">&nbsp;</td><td width="200">&nbsp;</td><td width="200">&nbsp;</td></tr><tr><td width="200" valign="top">&nbsp;</td><td width="200" valign="top" align="center"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable"><img src="${user.createdBy.image}" style="border-radius: 50%" width="155" height="155" alt="Logo" data-default="placeholder"/></div></div></td><td width="200" valign="top">&nbsp;</td></tr><tr height="25"><td width="200">&nbsp;</td><td width="200">&nbsp;</td><td width="200">&nbsp;</td></tr></table></div><div class="movableContent"><table cellpadding="0" cellspacing="0" border="0" align="center" width="600"><tr><td width="100%" colspan="3" align="center" style="padding-bottom:10px;padding-top:25px;"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><h2>${user.createdBy.username} is looking for your help near you.</h2><div><img width="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=${user.location.lat},${user.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:A%7C${user.location.lat},${user.location.lng}&key=AIzaSyCcWl8R2Zciexw1WhPtuTVWGeqt6XQ1S5I" alt="Google Map"></div></div></div></td></tr><tr><td width="100%" colspan="3" align="center" style="padding-bottom:10px;padding-top:25px;"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><h4><em>They are only ${(campaign.distance/1000).toFixed(1) } km away from you.</em></h4></div></div></td></tr><tr><td width="100">&nbsp;</td><td width="400" align="center" style="padding-bottom:5px;"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><p>${user.description}</p></div></div></td><td width="100">&nbsp;</td></tr></table></div><div class="movableContent"><table cellpadding="0" cellspacing="0" border="0" align="center" width="600"><tr><td width="100">&nbsp;</td><td width="400" align="center" style="padding-top:25px;padding-bottom:115px;"><table cellpadding="0" cellspacing="0" border="0" align="center" width="200" height="50"><tr><td bgcolor="#ED006F" align="center" style="border-radius:4px;" width="200" height="50"><div class="contentEditableContainer contentTextEditable"><div class="contentEditable" ><a target="_blank" href="http://tjc-app.herokuapp.com/campaigns/${user.id}" class="link2" style="color:white; text-decoration:none; font-weight:bold">Help out now!</a></div></div></td></tr></table></td><td width="100">&nbsp;</td></tr></table></div></td></tr></table></td></tr></table>`
  };
  return emailConfig;
}

function sendMail(emailConfig) {

  console.log('Creating Transport');

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  // mailing options passing
  const mailOpts = emailConfig;

  console.log('mailOpts: ', emailConfig);

  console.log('Sending Mail');
  // Send mail
  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(mailOpts, function (error, response) {
      if (error) {
        return reject(error);
      } else {
        console.log('Message sent: ' + response.message);
        console.log('Closing Transport');
        smtpTransport.close();
        console.log('RESPONSE', response);
        return resolve(response);
      }
    });
  });
}

module.exports = {
  findSuitableUsers,
  configEmail,
  sendMail
};
