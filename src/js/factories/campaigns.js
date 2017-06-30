angular
  .module('disasterRelief')
  .factory('Campaign', Campaign);

Campaign.$inject = ['$resource'];
function Campaign($resource) {
  return new $resource('/api/campaigns/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
