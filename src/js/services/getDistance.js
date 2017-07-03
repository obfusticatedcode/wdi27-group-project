/*global geolib*/
angular
  .module('disasterRelief')
  .service('GetDistance', GetDistance );

<<<<<<< HEAD
=======
GetDistance.$inject = ['geolib'];
>>>>>>> development
function GetDistance(geolib){

  return geolib.getDistance(
    {lat: 51, lng: 7.49347},
    {lat: 51, lng: 7.49347}
  );
}
<<<<<<< HEAD

console.log('Service output', GetDistance(geolib));
=======
>>>>>>> development
