angular
  .module('disasterRelief')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$auth', 'User', '$state', 'UserComment'];
function UsersShowCtrl($auth, User, $state, UserComment) {
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

  function addComment() {
    UserComment
      .save({ userId: vm.user.id }, vm.newComment)
      .$promise
      .then((comment) => {
        vm.user.comments.push(comment);
        vm.newComment = {};
      });
  }

  vm.addComment = addComment;
}
