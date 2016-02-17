// Declares the initial angular module "windoApp". Module grabs other
// controllers and services.
var app = angular.module('windoApp', [
  'ui.router',
  'ngMaterial'
]);

angular.module('windoApp').config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .dark()
  .primaryPalette('blue')
  .accentPalette('grey');
});
