angular
  .module('disasterRelief')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$auth', 'User', '$state'];
function ProfileCtrl($auth, User, $state) {
  const vm = this;

  console.log('hello!');//getting the token from the local storage

  const { userId } = $auth.getPayload();
  console.log(userId);

  if (userId) vm.user = User.get({ id: userId });

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;
}
