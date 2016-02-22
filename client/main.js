// Declares the initial angular module "windoApp". Module grabs other
// controllers and services.
var app = angular.module('windoApp', [
  'ui.router',
  'ngMaterial',
  'ngMessages'
]);

angular.module('windoApp').config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('indigo')
  .accentPalette('pink');
});

angular.module('windoApp').controller(function($scope) {
  console.log('hi');
})
