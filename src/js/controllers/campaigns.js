angular
  .module('disasterRelief')
  .controller('CampaignsIndexCtrl', CampaignsIndexCtrl)
  .controller('CampaignsNewCtrl', CampaignsNewCtrl)
  .controller('CampaignsShowCtrl', CampaignsShowCtrl)
  .controller('CampaignsEditCtrl', CampaignsEditCtrl);

CampaignsIndexCtrl.$inject = ['Campaign'];
function CampaignsIndexCtrl(Campaign) {
  const vm        = this;
  vm.all          = [];

  Campaign
    .query()
    .$promise
    .then((data) => {
      vm.locations = data.map(campaign => campaign.location);
      vm.all = data;
    });


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
