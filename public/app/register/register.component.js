angular.module('windoApp').directive('register', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/register.html',
    controllerAs: 'register',
    controller: function ($http, $scope) {
      var vm = this;

      vm.firstname = "";
      vm.lastname = "";

      vm.handle = "@-";

      $scope.$watch(
         "register.firstname",
         function handleChange(newValue, oldValue) {
            if (vm.handle == "@" + oldValue + "-" + vm.lastname)
               vm.handle = "@" + vm.firstname + "-" + vm.lastname;
         }
      )

      $scope.$watch(
         "register.lastname",
         function handleChange(newValue, oldValue) {
            if (vm.handle == "@" + vm.firstname + "-" + oldValue)
               vm.handle = "@" + vm.firstname + "-" + vm.lastname;
         }
      )

    }
  }
});
