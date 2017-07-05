angular
.module('disasterRelief')
.directive('base64', base64);

function base64() {
  const fileReader = new FileReader();

  return {
    restrict: 'A', //A for attribute
    require: 'ngModel',
    link($scope, element, attrs, ngModel) {

      fileReader.onload = function fileLoaded() {
        ngModel.$setViewValue(fileReader.result);
        console.log(fileReader.result);
      }; //OLDSKOOL VANILLA JS
      // console.log(element);
      element.on('change', (e) => {
        const file = (e.target.files || e.dataTransfer.files)[0];//e.target MSFT and FF, e.dataTransfer Chrome and Safari
        console.log(file);
        fileReader.readAsDataURL(file);
      });
    }
  };
}
