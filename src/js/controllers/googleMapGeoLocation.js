angular
  .module('disasterRelief')
  .controller('GeolocationCtrl', GeolocationCtrl);

GeolocationCtrl.$inject = ['geolocation'];

function GeolocationCtrl(geolocation) {
  const vm = this;

  geolocation.getLocation()
    .then((data) => {
      console.log(`current user position` ,data.coords);
      vm.coords = {
        lat: data.coords.latitude,
        lng: data.coords.longitude
      };
    });
}
