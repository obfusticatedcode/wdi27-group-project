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

      function alert() {
        alert('Function called');
      }


      function generateMarkers() {
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

        markers.forEach((marker) => {
          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
          'sandstone rock formation in the southern part of the '+
          'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
          'south west of the nearest large town, Alice Springs; 450&#160;km '+
          '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
          'features of the Uluru - Kata Tjuta National Park. Uluru is '+
          'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
          'Aboriginal people of the area. It has many springs, waterholes, '+
          'rock caves and ancient paintings. Uluru is listed as a World '+
          'Heritage Site.</p>'+
          '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
          'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
          '(last visited June 22, 2009).</p>'+
          '</div>'+
          '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          google.maps.event.addListener(marker, 'click', function () {
            // When clicked, open the selected marker's message
            console.log('I have been clicked!');
            infowindow.open(map, marker);
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
