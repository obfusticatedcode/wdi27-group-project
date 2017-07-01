angular
  .module('disasterRelief')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';

  //facebook
  $authProvider.facebook({
    url: '/api/oauth/facebook',
    clientId: '450821241962493'
  });

  //instagram
  $authProvider.instagram({
    url: 'api/oauth/instagram',
    clientId: '6310d5518303449d8a24e0ed80ee8c69'
  });
}
