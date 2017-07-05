const jwt = require('jsonwebtoken');
const { secret }  = require('../config/environment');
const oauth = require('../config/oauth');
const User = require('../models/user');
const rp = require('request-promise');

//facebook
function facebook(req, res, next) {
  return rp({
    method: 'GET',
    url: oauth.facebook.accessTokenUrl,
    qs: {
      client_id: oauth.facebook.clientId,
      redirect_uri: oauth.facebook.redirectUri,
      client_secret: oauth.facebook.clientSecret,
      code: req.body.code
    },
    json: true
  })
  .then((token) => {
    return rp({
      method: 'GET',
      url: 'https://graph.facebook.com/v2.5/me?fields=id,name,first_name,last_name,email,picture.height(300)',
      qs: token,
      json: true
    });
  })
  .then((profile) => {
    console.log(profile);
    return User.findOne({$or: [{facebookId: profile.id }, { email: profile.email }]})
    .then((user) => {
      if(!user){
        user = new User({
          firstName: profile.first_name,
          lastName: profile.last_name,
          username: profile.name,
          email: profile.email
        });
      }
      user.facebookId = profile.id;
      user.image = profile.picture.data.url;
      return user.save();
    });
  })
  .then((user) => {
    console.log(user);
    const payload = { userId: user.id };
    const token   = jwt.sign(payload, secret, { expiresIn: '1hr' });

    return res.json({
      token,
      message: `Welcome back, ${user.username}`
    });
  })
  .catch(next);
}


//instagram
function instagram (req, res, next) {

  return rp({
    method: 'POST',
    url: oauth.instagram.accessTokenUrl,
    form: {
      client_id: oauth.instagram.clientId,
      client_secret: oauth.instagram.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: oauth.instagram.redirectUri,
      code: req.body.code
    },
    json: true
  })
  .then((token) => {
    console.log('token', token);
    return User
    .findOne({ instagramId: token.user.id })
    .then((user) => {
      if(!user) {
        user = new User({
          username: token.user.username,
          image: token.user.profile_picture
        });
      }

      user.instagramId = token.user.id;
      return user.save();
    });
  })
  .then((user) => {
    console.log('INSTA', user);
    //Create a JWT tocken and send it back to Angular app

    const payload = { userId: user.id };
    const token = jwt.sign(payload, secret, { expiresIn: '1hr'});

    return res.json({
      token,
      message: `Welcome back ${ user.username }`
    });

  })
  .catch(next);
}


module.exports = {
  facebook,
  instagram
};
