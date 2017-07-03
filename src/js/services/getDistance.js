angular
  .module('disasterRelief')
  .service('GetDistance', GetDistance );

GetDistance.$inject = ['geolib'];
function GetDistance(geolib){

  return geolib.getDistance(
    {latitude: 51, longitude: 7.49347},
    {latitude: 51, longitude: 7.49347}
  );
}
