angular
  .module('disasterRelief')
  .controller('CampaignsIndexCtrl', CampaignsIndexCtrl)
  .controller('CampaignsNewCtrl', CampaignsNewCtrl)
  .controller('CampaignsShowCtrl', CampaignsShowCtrl)
  .controller('CampaignsEditCtrl', CampaignsEditCtrl);

CampaignsIndexCtrl.$inject = ['Campaign'];
function CampaignsIndexCtrl(Campaign) {
  const vm        = this;
  vm.getLocations = convertLatLng;
  vm.all          = Campaign.query();
  console.log('CampaignsIndexCtrl', vm);
  convertLatLng();

  function convertLatLng() {
    console.log('This convertLatLng function: "I have been called!"');
    const data = [];
    angular.forEach(vm.all, function(campaign) {
      data.push(campaign.location);
    });
    console.log(data);
    console.log(vm);

    vm.locations = data;
    return data;
  }


}

CampaignsNewCtrl.$inject = ['Campaign', '$state'];
function CampaignsNewCtrl(Campaign, $state) {
  const vm = this;
  vm.campaign = {};

  function campaignsCreate() {
    Campaign
      .save(vm.campaign)
      .$promise
      .then(() => $state.go('campaignsIndex'));
  }

  vm.create = campaignsCreate;
}

CampaignsShowCtrl.$inject = ['Campaign', '$stateParams', '$state'];
function CampaignsShowCtrl(Campaign, $stateParams, $state) {
  const vm = this;

  vm.campaign = Campaign.get($stateParams);

  function campaignsDelete() {
    vm.campaign
      .$remove()
      .then(() => $state.go('campaignsIndex'));
  }

  vm.delete = campaignsDelete;
}

CampaignsEditCtrl.$inject = ['Campaign', '$stateParams', '$state'];
function CampaignsEditCtrl(Campaign, $stateParams, $state) {
  const vm = this;

  vm.campaign = Campaign.get($stateParams);

  function campaignsUpdate() {
    if (vm.campaignForm.$valid) {
      vm.campaign
        .$update()
        .then(() => $state.go('campaignsShow', $stateParams));
    }
  }

  vm.update = campaignsUpdate;
}
