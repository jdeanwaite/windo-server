angular.module('windoApp').directive('timePicker', function () {
  return {
    restrict: 'E',
    templateUrl: '/meetup/timepicker.html',
    controllerAs: 'timePicker',
    scope: {
      dateHash: '=dateHash'
    },
    controller: function ($state, $http, $scope, $document) {
      var vm = this;
      // var dayHeaders = $document.find('.day-headers');

      var defaultHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                          20, 21, 22, 23];

      // $document.find('.container').bind('scroll', function () {
      //   dayHeaders.css('left', -$(this).scrollLeft() + "px");
      //   // console.log();
      // });

      vm.days = {};
      vm.selectedHours = {};
      vm.limitTimes = $scope.limitTimes;

      $scope.$watch('dateHash', function() {
        vm.dateHash = $scope.dateHash;
        //var hours = {};
        console.log('dateHash:', $scope.dateHash);
        if (vm.dateHash)
          for (var day in vm.dateHash) {
            var unixTime = vm.dateHash[day].unixTime;
            if (!vm.days[unixTime])
              vm.days[unixTime] = {};
            vm.days[unixTime].date = new Date(unixTime * 1000);

            //if (Object.keys(vm.selectedDays[unixTime]).length > 0 && limitTimes != false)
            //  vm.days[unixTime].hours = vm.selectedDays.dateHash[unixTime];
            // else
            vm.days[unixTime].hours = defaultHours;
          }

        //vm.hours = hours;
        // console.log("hey it chagnes");
        console.log(vm.days);
      });

      vm.selectHour = function(day, hour) {
        if (vm.hours[day.getFullYear()][day.getMonth()][day.getDate()][hour] == true)
          vm.hours[day.getFullYear()][day.getMonth()][day.getDate()][hour] = false;
        else
          vm.hours[day.getFullYear()][day.getMonth()][day.getDate()][hour] = true;

        console.log(vm.hours);
      }
    }
  }
});
