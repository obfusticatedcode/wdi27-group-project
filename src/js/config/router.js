angular
  .module('disasterRelief')
  .config(Router);

function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('campaignsIndex', {
    url: '/campaigns',
    templateUrl: 'js/views/campaigns/index.html',
    controller: 'CampaignsIndexCtrl as campaignsIndex'
  })
  .state('campaignsNew', {
    url: '/campaigns/new',
    templateUrl: 'js/views/campaigns/new.html',
    controller: 'CampaignsNewCtrl as campaignsNew'
  })
  .state('campaignsShow', {
    url: '/campaigns/:id',
    templateUrl: 'js/views/campaigns/show.html',
    controller: 'CampaignsShowCtrl as campaignsShow'
  })
  .state('campaignsEdit', {
    url: '/campaigns/:id/edit',
    templateUrl: 'js/views/campaigns/edit.html',
    controller: 'CampaignsEditCtrl as campaignsEdit'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/auth/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'js/views/auth/register.html',
    controller: 'RegisterCtrl as register'
  });

  $urlRouterProvider.otherwise('/');
}
