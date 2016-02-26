angular.module('windoApp').directive('submitTimes', function () {
  return {
    restrict: 'E',
    templateUrl: '/meetup/submit.html',
    controllerAs: 'submitTimes',
    controller: function ($state, $http, $stateParams) {
      var vm = this;
      console.log('workgin', $stateParams.id);

      $http.get('/api/v0/meetups/' + $stateParams.id)
      .then(function(res) {
        console.log('yay', res);
        vm.meetup = res.data;
      })
      .catch(function(err) {
        console.log('no fun:', err);
      })
    }
  }
});
