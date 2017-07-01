module.exports = {
  //facebook
  facebook: {
    loginUrl: 'https://www.facebook.com/v2.9/dialog/oauth',
    clientId: process.env.FACEBOOK_APP_ID,
    redirectUri: 'http://localhost:7000/',
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    scope: 'user: email',
    accessTokenUrl: 'https://graph.facebook.com/v2.9/oauth/access_token'
  }
  
};
