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
      console.log('workgin tiedfslkfj');

      var dayHeaders = $document.find('.day-headers');

      $document.find('.container').bind('scroll', function () {
        dayHeaders.css('left', -$(this).scrollLeft() + "px");
        // console.log();
      });

      vm.hours = {};
      vm.days = [];

      $scope.$watch('meetup', function() {
        vm.meetup = $scope.meetup;
        var hours = {};
        console.log($scope.meetup);
        if (vm.meetup && vm.meetup.dateHash)
          for (year in vm.meetup.dateHash)
            for (month in vm.meetup.dateHash[year])
              for (day in vm.meetup.dateHash[year][month]) {
                vm.days.push(new Date(year, month, day));
                //for (hour in vm.) eventually
                if (!hours[year])
                  hours[year] = {};
                if (!hours[year][month])
                  hours[year][month] = {};
                if (!hours[year][month][day])
                  hours[year][month][day] = {};

                for (var i = 5; i < 24; i++)
                  hours[year][month][day][i] = false;
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
