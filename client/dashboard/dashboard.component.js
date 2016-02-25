angular.module('windoApp').directive('dashboard', function () {
  return {
    restrict: 'E',
    templateUrl: '/dashboard/dashboard.html',
    controllerAs: 'dashboard',
    controller: function ($http, $state) {
      var vm = this;
      vm.meetups = [];
      vm.invitees=[];

      $http.get('/api/v0/meetups/')
      .then(function (response) {
        vm.meetups = response.data;
      });

      this.goToMeetup = function (id) {
        $state.go('submitTimes', {id: id});
      }

      this.deleteMeetup = function (id) {
        $state.go('submitTimes', {id: id});
      }
    }
  }
});
