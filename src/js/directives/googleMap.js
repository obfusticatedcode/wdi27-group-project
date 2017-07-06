/* global google, MarkerClusterer */

angular
.module('disasterRelief')
.directive('googleMap', googleMap);

function googleMap() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map">Google Map</div>',
    scope: {
      center: '=',
      locations: '='
    },
    link(scope, element) {
      let map = null;
      let markers = null;


      scope.$watch('locations', generateMarkers);
      scope.$on('$destroy', destroyMap);
      scope.$watch('center', centerMap);
      // console.log(element[0]);

      map = new google.maps.Map(element[0], {
        zoom: 8,
        scrollwheel: false,
        center: scope.center
      });

      function centerMap(center){
        if(!center) return false;
        map.setCenter(center);
        map.setZoom(3);
      }

      function generateMarkers(locations) {
        if(!scope.locations) return false;
        // Create an array of alphabetical characters used to label the markers.
        const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.

        markers = scope.locations.map(function(location, i) {

          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });

        });

        // Add a marker clusterer to manage the markers.
        new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
      }

      function destroyMap() {
        console.log('destroying map... ');
        markers.map((marker) => marker.setMap(null));
        markers = null;
        map = null;
      }

    }
  };
}
