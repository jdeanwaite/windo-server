angular.module('windoApp').directive('register', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/register/register.html',
    controllerAs: 'register',
    controller: function ($http, $scope) {
      var vm = this;

      // vm.firstname = "";
      // vm.lastname = "";

      // vm.username = "@-";

      // $scope.$watch(
      //    "register.firstname",
      //    function usernameChange(newValue, oldValue) {
      //       if (vm.username == "@" + oldValue + "-" + vm.lastname)
      //          vm.username = "@" + vm.firstname + "-" + vm.lastname;
      //    }
      // )
      //
      // $scope.$watch(
      //    "register.lastname",
      //    function usernameChange(newValue, oldValue) {
      //       if (vm.username == "@" + vm.firstname + "-" + oldValue)
      //          vm.username = "@" + vm.firstname + "-" + vm.lastname;
      //    }
      // )

    }
  }
});
