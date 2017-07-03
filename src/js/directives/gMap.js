/* global google */

// Let's make our google map directive
angular
  .module('disasterRelief')
  .directive('gMap', gMap);

function gMap() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/views/directives/googleMap.html',
    scope: {
      center: '='
    },
    link(scope, element) {

      let map = null;
      let marker = null;

      scope.$watch('center', initMap);
      scope.$on('$destroy', destroyMap);

      function initMap(center) {
        map =  new google.maps.Map(element[0], {
          zoom: 10,
          scrollwheel: false,
          center: center
        });

        //create a marker
        marker = new google.maps.Marker({
          position: center,
          map: map
        });
      }//end of initMap function

      function destroyMap() {
        console.log('destroying the second map');
        marker.setMap(null);
        marker = null;
        map = null;
      }

    }
  };
}
