angular.module('windoApp').directive('login', function () {
  return {
    restrict: 'E',
    templateUrl: '/login/login.html',
    controllerAs: 'login',
    controller: function ($http, $state) {
      var vm = this;
      vm.showLogin = false;

      vm.register = function() {
        if (vm.password != vm.confirmPassword) {
          vm.confirmPassword = "";
          return;
        }

        if (vm.registerForm.$valid) {
          var user = {
            firstName: vm.firstname,
            lastName: vm.lastname,
            email: vm.email,
            password: vm.password
          };

          console.log('submitting a valid form!', user);
          $http.post("/api/v0/users/", user).success(function(data, status) {
              console.log(data);
              console.log(status);
          });
        }
      }

      vm.login = function() {
        if (vm.loginForm.$valid) {
          console.log('loggin in');

          var creds = {
            username: vm.username,
            password: vm.loginPassword
          };

          $http.post("/login", creds)
          .then(function(data) {
            console.log(data);
            console.log(data.status);
            $state.go('dashboard');
          })
          .catch(function(err) {
            console.log('failed:', err);
            vm.username = "";
            vm.loginPassword = "";
          });
        }
      }

    }
  }
});
