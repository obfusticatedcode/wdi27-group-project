
/* global google */

angular
  .module('disasterRelief')
  .directive('autocomplete', autocomplete);

autocomplete.$inject = [];
function autocomplete() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      location: '='
    },
    link: function(scope, element, attrs, model) {
      const options = {
        types: []
        // componentRestrictions: {}
      };

      const autocomplete = new google.maps.places.Autocomplete(element[0], options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        scope.location = place.geometry.location.toJSON();
        model.$setViewValue(element.val());
      });
    }
  };
}
