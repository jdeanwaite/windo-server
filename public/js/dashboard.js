angular.module('windoApp').directive('dashboard', function () {
  return {
    restrict: 'E',
    templateUrl: '/app/templates/dashboard',
    controllerAs: 'dashboard',
    // controller: function ($scope, $reactive, $mdMedia, $state) {
    controller: function ($http) {
      var vm = this;
      vm.name = "name";
      // vm.users=[{handle:"bob"}, {handle:'joe'}];

      console.log('hello');
      $http.get('/api/v0/users/')
      .then(function (response) {
        vm.users = response.data;
      });

      // this.helpers({
      //   events: () => {
      //     return Events.find({});
      //   }
      // });
      //
      // this.goToEvent = (eventId) => {
      //   $state.go("event", { eventId: eventId });
      // }
      //
      // this.deleteEvent = (eventId) => {
      //   Events.remove({ _id: eventId });
      // }
    }
  }
});
