angular.module('windoApp').directive('timePicker', function () {
  return {
    restrict: 'E',
    templateUrl: '/meetup/timepicker.html',
    controllerAs: 'timePicker',
    scope: {
      meetup: '=meetup'
    },
    controller: function ($state, $http, $scope, $document) {
      var vm = this;
      var dayHeaders = $document.find('.day-headers');

      var defaultHours = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                          20, 21, 22, 23];

      $document.find('.container').bind('scroll', function () {
        dayHeaders.css('left', -$(this).scrollLeft() + "px");
        // console.log();
      });

      vm.days = {};
      vm.selectedHours = {};

      $scope.$watch('meetup', function() {
        vm.meetup = $scope.meetup;
        var hours = {};
        console.log($scope.meetup);
        if (vm.meetup && vm.meetup.dateHash)
          for (unixTime in vm.meetup.dateHash) {
            vm.days[unixTime].date = new Date(unixTime * 1000);

            if (vm.meetup.dateHash[unixTime].length > 0)
              vm.days[unixTime].hours = vm.meetup.dateHash[unixTime];
            else
              vm.days[unixTime].hours =
          }

        vm.hours = hours;
        // console.log("hey it chagnes");
        console.log(vm.days);


        vm.selectHour = function(day, hour) {
          if (vm.hours[day.getFullYear()][day.getMonth()][day.getDate()][hour] == true)
            vm.hours[day.getFullYear()][day.getMonth()][day.getDate()][hour] = false;
          else
            vm.hours[day.getFullYear()][day.getMonth()][day.getDate()][hour] = true;

          console.log(vm.hours);
        }



      })


    }
  }
});
