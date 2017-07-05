angular
  .module('disasterRelief')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$auth', 'User', '$state'];
function UsersShowCtrl($auth, User, $state) {
  const vm = this;

  console.log('hello!');//getting the token from the local storage

  vm.user = User.get($state.params);

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;

  // vm.user = User.get($stateParams);

  function usersDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('campaignsIndex'));
  }

  vm.delete = usersDelete;
}
