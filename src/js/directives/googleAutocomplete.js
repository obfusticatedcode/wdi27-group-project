
/* global google */

angular
  .module('disasterRelief')
  .directive('googleAutocomplete', googleAutocomplete);

googleAutocomplete.$inject = [];
function googleAutocomplete() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      location: '='
    },
    link: function(scope, element, attrs, model) {
      attrs.autocomplete = 'off';
      
      const options = {
        types: []
        // componentRestrictions: {}
      };

      const autocomplete = new google.maps.places.Autocomplete(element[0], options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        scope.location = place.geometry.location.toJSON();
        model.$setViewValue(element.val());
        scope.$apply();
      });
    }
  };
}
