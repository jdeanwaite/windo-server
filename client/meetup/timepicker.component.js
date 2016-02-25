angular.module('windoApp').directive('timePicker', function () {
  return {
    restrict: 'E',
    templateUrl: '/meetup/timepicker.html',
    controllerAs: 'timePicker',
    controller: function ($state, $http) {
      var vm = this;
      console.log('workgin tiedfslkfj');
    }
  }
});
