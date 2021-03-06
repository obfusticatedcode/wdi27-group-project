/* global google */

// Let's make our google map directive
angular
  .module('disasterRelief')
  .directive('gMap', gMap);

gMap.$inject = ['$timeout'];
function gMap($timeout) {
  return {
    restrict: 'E',
    replace: true,
    // templateUrl: '/js/views/directives/googleMap.html',
    template: '<div class="map">Google Map</div>',
    scope: {
      center: '='
    },
    link(scope, element) {

      let map = null;
      let marker = null;

      scope.$watch('center', centerMap);
      scope.$on('$destroy', destroyMap);

      map = new google.maps.Map(element[0], {
        zoom: 10,
        scrollwheel: false,
        center: {lat: 51.515419, lng: -0.141099 }
      });

      $timeout(() => {
        google.maps.event.trigger(map, 'resize');
      }, 250);

      function centerMap(center){
        if(!center) return false;
        map.setCenter(center);
        map.setZoom(16);
        //create a marker
        marker = new google.maps.Marker({
          position: center,
          map: map
        });
      }//end of initMap function

      function destroyMap() {
        console.log('destroying the second map');
        if(marker) marker.setMap(null);
        marker = null;
        map = null;
      }

    }
  };
}
