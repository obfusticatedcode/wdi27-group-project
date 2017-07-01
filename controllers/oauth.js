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
      url: 'https://graph.facebook.com/v2.5/me?fields=id,name,email,picture.height(300)',
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




module.exports = {
  facebook
};
