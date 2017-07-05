angular
  .module('disasterRelief')
  .factory('User', User)
  .factory('UserComment', UserComment);

User.$inject = ['$resource'];
function User($resource) {
  return new $resource('/api/users/:id', { id: '@id' });
}

//comments
UserComment.$inject = ['$resource'];
function UserComment($resource) {
  return new $resource('/api/users/:userId/comments/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
