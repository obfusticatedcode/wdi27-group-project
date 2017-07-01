angular
  .module('disasterRelief')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};

  function submit() {
    $auth.login(vm.credentials).
      then(() => $state.go('campaignsIndex'));
  }

  vm.submit = submit;
}
