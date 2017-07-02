/* global google */

angular
.module('disasterRelief')
.directive('googleMap', googleMap);

function googleMap() {
  return {
    restrict: 'E',
    controllerAs: 'CampaignsIndexCtrl',
    replace: true,
    template: '<div class="map">Google Map</div>',
    scope: {
      center: '=',
      locations: '='
    },
    link(scope, element, CampaignsIndexCtrl) {
      let map = null;
      let marker = null;
      console.log(CampaignsIndexCtrl);

      scope.$on('load', CampaignsIndexCtrl.getLocations);
      scope.$watch('locations', initMap);
      scope.$on('$destroy', destroyMap);

      function initMap(locations) {
        // locations = [].slice.call(locations);
        if(!locations) return false;

        map = new google.maps.Map(element[0], {
          zoom: 8,
          center: {lat: 51.515419, lng: -0.141099 }
        });

        // Create an array of alphabetical characters used to label the markers.
        const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        const markers = scope.locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        console.log('Locations: ', locations);
        console.log('Markers: ', markers);

        // Add a marker clusterer to manage the markers.
        const markerCluster = new MarkerClusterer(map, markers,
          { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }

      function destroyMap() {
        console.log('destroying map... ');
        marker.setMap(null);
        marker = null;
        map = null;
      }

    }
  };
}
