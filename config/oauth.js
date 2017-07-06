module.exports = {
  //facebook
  facebook: {
    loginUrl: 'https://www.facebook.com/v2.9/dialog/oauth',
    clientId: process.env.FACEBOOK_APP_ID,
    redirectUri: process.env.NODE_ENV === 'production' ? 'https://tjc-app.herokuapp.com/' : 'http://localhost:7000/',
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    scope: 'user: email',
    accessTokenUrl: 'https://graph.facebook.com/v2.9/oauth/access_token'
  },

  // Instagram
  instagram: {
    name: 'instagram',
    loginUrl: 'https://api.instagram.com/oauth/authorize/',
    accessTokenUrl: 'https://api.instagram.com/oauth/access_token',
    redirectUri: process.env.NODE_ENV === 'production' ? 'https://tjc-app.herokuapp.com' : 'http://localhost:7000',
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_SECRET_KEY,
    responseCode: 'code'
  }

};
