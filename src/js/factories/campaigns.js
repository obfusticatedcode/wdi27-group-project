angular
  .module('disasterRelief')
  .factory('Campaign', Campaign)
  .factory('CampaignCategory', CampaignCategory);

Campaign.$inject = ['$resource'];
function Campaign($resource) {
  return new $resource('/api/campaigns/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}

CampaignCategory.$inject = ['$resource'];
function CampaignCategory($resource) {
  return new $resource('api/campaigns/:campaignId/categories/:id', { id: '@id' }, {
    update: { method: 'PUT'}
  });
}
