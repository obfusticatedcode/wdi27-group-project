module.exports = {
  //facebook
  facebook: {
    loginUrl: 'https://www.facebook.com/v2.9/dialog/oauth',
    clientId: process.env.FACEBOOK_APP_ID,
    redirectUri: 'http://localhost:7000/ || https://tjc-app.herokuapp.com/',
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    scope: 'user: email',
    accessTokenUrl: 'https://graph.facebook.com/v2.9/oauth/access_token'
  },

  // Instagram
  instagram: {
    name: 'instagram',
    loginUrl: 'https://api.instagram.com/oauth/authorize/',
    accessTokenUrl: 'https://api.instagram.com/oauth/access_token',
    redirectUri: 'http://localhost:7000 || https://tjc-app.herokuapp.com/',
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_SECRET_KEY,
    responseCode: 'code'
  }

};
