angular.module('windoApp').directive('eventLanding', function () {
  return {
    restrict: 'E',
    templateUrl: '/meetup/event.html',
    controllerAs: 'eventLanding',
    controller: function ($state, $http, $stateParams) {
      var vm = this;
      console.log('workgin', $stateParams.id);

      $http.get('/api/v0/meetups/' + $stateParams.id)
      .then(function(res) {
        console.log('yay', res);
        vm.meetup = res.data;
        console.log(vm.meetup);
      })
      .catch(function(err) {
        console.log('no fun:', err);
      })
    }
  }
});
