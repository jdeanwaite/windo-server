angular.module('windoApp').directive('register', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/register/register.html',
    controllerAs: 'register',
    controller: function ($http, $scope) {
      var vm = this;

      vm.firstName = "";
      vm.lastName = "";
      vm.email = "";
      vm.password = "";
      vm.password2 = "";

      vm.submit = function() {
        var user = {
          firstName: vm.firstName,
          lastName: vm.lastName,
          email: vm.email,
          password: vm.password
        }

        $http.post("/api/v0/users", user)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(err) {
          console.log(err);
        });
      }

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
