angular
  .module('disasterRelief')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope'];
function MainCtrl($rootScope) {
  $rootScope.$on('error', (e, err) => {
    console.log(e, err);
  });
}
