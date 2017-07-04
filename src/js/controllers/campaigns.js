/* global geolib */

angular
.module('disasterRelief')
.controller('CampaignsIndexCtrl', CampaignsIndexCtrl)
.controller('CampaignsNewCtrl', CampaignsNewCtrl)
.controller('CampaignsShowCtrl', CampaignsShowCtrl)
.controller('CampaignsEditCtrl', CampaignsEditCtrl);

CampaignsIndexCtrl.$inject = ['Campaign', 'filterFilter', 'orderByFilter','$scope'];
function CampaignsIndexCtrl(Campaign, filterFilter, orderByFilter, $scope) {
  const vm        = this;
  vm.all          = [];
  vm.center       = { lat: 51.5004808, lng: -0.07 };

  $scope.$watch(() => vm.center, getDistances);

  Campaign
  .query()
  .$promise
  .then((data) => {
    vm.locations = data.map(campaign => campaign.location);
    vm.all = data;
    getDistances();
    filterCampaigns();
  });

  function getDistances(){
    vm.all = vm.all.map(campaign => {
      campaign.distance = geolib.getDistance(vm.center, campaign.location);
      return campaign;
    });
  }

  //filter function
  function filterCampaigns() {
    const params = {
      name: vm.q
    };
    vm.filtered = filterFilter(vm.all, params);//taking the whole array and filtering it
    vm.filtered = orderByFilter(vm.filtered, vm.distance);//taking the whole array and filtering it

  }

  //create a watch group to listen out for changes and then running the function
  $scope.$watchGroup([
    () => vm.q,
    () => vm.distance
  ], filterCampaigns);

}//end of CampaignsIndexCtrl function

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
