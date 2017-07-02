angular
  .module('disasterRelief')
  .controller('GeolocationCtrl', GeolocationCtrl);

GeolocationCtrl.$inject = ['geolocation'];

function GeolocationCtrl(geolocation) {
  const vm = this;

  vm.coords = geolocation.getLocation()
    .then((data) => {
      console.log(`current user position` ,data.coords);
      return {
        lat: data.coords.latitude,
        lng: data.coords.longitude
      };
    });
}
