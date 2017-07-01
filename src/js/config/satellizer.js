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
}
