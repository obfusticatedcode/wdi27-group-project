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
      locations: '=',
      campaigns: '='
    },
    link(scope, element) {
      let map = null;
      let markers = null;
      let infowindow = null;

      scope.$watch('locations', generateMarkers);
      scope.$on('$destroy', destroyMap);
      scope.$watch('center', centerMap);



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


      function generateMarkers() {
        if(!scope.locations) return false;

        console.log('Campaigns: ', scope.campaigns);
        // Create an array of alphabetical characters used to label the markers.
        const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.

        markers = scope.locations.map(function(location, i) {

          // infowindow = new google.maps.InfoWindow();

          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });

        });


        infowindow = new google.maps.InfoWindow();
        for(let i = 0; i < markers.length; i++) {
          const contentString = `
            <strong>${scope.campaigns[i].name}</strong>
            <p>${scope.campaigns[i].description}</p>
            <p>${scope.campaigns[i].distance} km away</p>
            `;

          google.maps.event.addListener(markers[i], 'click', function () {
            // When clicked, open the selected marker's message
            infowindow.setContent(contentString);
            infowindow.open(map, this);
          });
        }

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
