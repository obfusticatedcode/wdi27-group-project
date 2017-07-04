const nodemailer = require('nodemailer');

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

module.exports = { sendMail };
