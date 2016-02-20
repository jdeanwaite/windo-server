angular.module('windoApp').directive('dashboard', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/dashboard/dashboard.html',
    controllerAs: 'dashboard',
    controller: function ($http) {
      var vm = this;
      vm.meetups = [];
      vm.invitees=[];

      $http.get('/api/v0/meetups/')
      .then(function (response) {
        vm.meetups = response.data;
      });

      this.goToMeetup = function (id) {
        $state.go("meetup", { id: id });
      }

      this.deleteMeetup = function (id) {
        //delete meetup here.
      }
    }
  }
});
