angular
  .module('disasterRelief')
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersShowCtrl.$inject = ['$auth', 'User', '$state', 'UserComment', 'Campaign'];
function UsersShowCtrl($auth, User, $state, UserComment, Campaign) {
  const vm = this;

  console.log('Profile: ', vm);


  vm.user = User.get($state.params);


  function logout() {
    $auth.logout();
    $state.go('login');
  }

  function toggleAvailability(campaign) {
    console.log('ID: ', campaign.id);
    //vm.data.campaigns[0].isAvailable = !vm.data.campaigns[0].isAvailable;
    Campaign
    .get({ id: vm.data.campaigns[0].id })
    .$promise
    .then((campaign) => {
      console.log(campaign);
      campaign.isAvailable = !campaign.isAvailable;
      console.log(vm);
    });


  }

  vm.toggleAvailability = toggleAvailability;
  vm.logout = logout;

  // vm.user = User.get($stateParams);



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

  function deleteComment(comment) {
    UserComment
      .delete({ userId: vm.user.id, id: comment.id })
      .$promise
      .then(() => {
        const index = vm.user.comments.indexOf(comment);
        vm.user.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersUpdate() {
    if(vm.editForm.$valid) {
      User
        .update({ id: vm.user.id }, vm.user)
        .$promise
        .then(() => $state.go('usersShow', $stateParams));
    }
  }
  vm.update = usersUpdate;

  function usersDelete() {
    console.log('clicked');
    vm.user
      .$remove()
      .then(() => {
        $state.go('register');
      });
  }

  vm.delete = usersDelete;
}
