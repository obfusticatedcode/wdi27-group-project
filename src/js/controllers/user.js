angular
  .module('disasterRelief')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$auth', 'User', '$state', '$rootScope', 'Campaign'];
function ProfileCtrl($auth, User, $state, $rootScope, Campaign) {
  const vm = this;

  console.log('Profile: ', vm);

  //getting the token from the local storage
  const { userId } = $auth.getPayload();

  if (userId) vm.data = User.get({ id: userId });

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
}
