angular
  .module('disasterRelief')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', '$transitions'];
function MainCtrl($rootScope, $state, $auth, $transitions) {
  const vm = this;

  //hide and show DOM elements based on authentication
  vm.isAuthenticated = $auth.isAuthenticated;
  vm.menuIsOpen = true;
  $transitions.onStart({}, () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.menuIsOpen = true;
  });

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;
    if(err.status === 401) {
      if(vm.pageName !== '/') vm.stateHasChanged = false;
      $state.go('login');
    }
  });

  $transitions.onSuccess({}, (transition) => {
    vm.pageName = transition.$to().name; // Storing the current state name as a string
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    if($auth.getPayload()) vm.currentUserId = $auth.getPayload().userId;
  });

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;



}
