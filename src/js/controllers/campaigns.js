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
  console.log(vm);
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

  function getDistances() {
    vm.all = vm.all.map(campaign => {
      campaign.distance = geolib.getDistance(vm.center, campaign.location);
      return campaign;
    });
  }

  console.log('VM', vm);
  //filter function
  function filterCampaigns() {
    const params = {
      name: vm.q,
      description: vm.description
    };
    vm.filtered = filterFilter(vm.all, params);//taking the whole array and filtering it
    vm.filtered = orderByFilter(vm.filtered, vm.distance);//taking the whole array and filtering it

  }

  //create a watch group to listen out for changes and then running the function
  $scope.$watchGroup([
    () => vm.q,
    () => vm.description,
    () => vm.distance
  ], filterCampaigns);

}//end of CampaignsIndexCtrl function

CampaignsNewCtrl.$inject = ['Campaign', '$state'];
function CampaignsNewCtrl(Campaign, $state) {
  const vm = this;
  vm.campaign = { categories: [{}] };

  function campaignsCreate() {
    Campaign
    .save(vm.campaign)
    .$promise
    .then(() => $state.go('campaignsIndex'));
  }

  vm.create = campaignsCreate;

  function addCategory() {
    vm.campaign.categories.push({}); //pushes category to array
    // .save({ campaignId: vm.campaign.id }, vm.newCategory)
    // .$promise
    // .then((category) => {
    //   console.log(category);
    // });
  }
  vm.addCategory = addCategory;




  function deleteCategoryFromView(category) {
    console.log(category);
    const index = vm.campaign.categories.indexOf(category);
    vm.campaign.categories.splice(index, 1);
  }
  vm.deleteCategoryFromView = deleteCategoryFromView;

}//end of CampaignsNewCtrl function





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

CampaignsEditCtrl.$inject = ['Campaign', '$stateParams', '$state', 'CampaignCategory'];
function CampaignsEditCtrl(Campaign, $stateParams, $state, CampaignCategory) {
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

  function addCategory() {
    vm.campaign.categories.push({}); //pushes category to array
    console.log(vm.campaign.categories);
  }


  vm.addCategory = addCategory;

  function deleteCategory(category) {
    CampaignCategory
    .delete({ id: category.id })
    .$promise
    .then(() => {
      const index = vm.campaign.categories.indexOf(category);
      vm.campaign.categories.splice(index, 1);
    });
  } //category needs to be passed in

  vm.deleteCategory = deleteCategory; //attached to controller


}//end of the CampaignsEditCtrl function
