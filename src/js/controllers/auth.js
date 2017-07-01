angular
  .module('disasterRelief')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);


RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  function submit() {
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }

  vm.submit = submit;
}


LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};

  function submit() {
    $auth.login(vm.credentials).
      then(() => $state.go('campaignsIndex'));
  }

  vm.submit = submit;

  //oauth
  function authenticate(provider) {
    $auth.authenticate(provider)
    .then(() => $state.go('profile'));
  }

  vm.authenticate = authenticate;

}//end of LoginCtrl function
