angular.module('windoApp').directive('create', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/create.html',
    controllerAs: 'create',
    controller: function ($mdMedia, $state) {
      var vm = this;

      vm.invitees = [];
      vm.eventName = "";
      vm.test = vm.eventName;
      vm.fromDate = new Date();
      vm.toDate = new Date();
      vm.toDate.setDate(vm.fromDate.getDate() + 7);

      // this.helpers({
      //   users: () => {
      //     var users = Meteor.users.find({});
      //     if (users) console.log(users);
      //     return users;
      //   }
      // });

      vm.submitForm = function () {
        if (!vm.createForm.$valid)
          return;

        console.log('submitting');
        var meetup = {
          _ownerId: '1234',
          name:     vm.eventName,
          fromDate: vm.fromDate,
          toDate:   vm.toDate,
          invitees: vm.invitees
        };
        console.log(meetup);

        // var meetupId = Events.insert(event);
        // $state.go("event", { eventId: eventId });
      }
    }
  }
});

angular.module('windoApp').directive('mdChips', function () {
  return {
    restrict: 'E',
    require: 'mdChips',
    link: function (scope, element, attributes, mdChipsCtrl) {
      mdChipsCtrl.onInputBlur = function () {
        this.inputHasFocus = false;

      // ADDED CODE
        var chipBuffer = this.getChipBuffer();
        if (chipBuffer != "") { // REQUIRED, OTHERWISE YOU'D GET A BLANK CHIP
            this.appendChip(chipBuffer);
            this.resetChipBuffer();
        }
      // - EOF - ADDED CODE
      };
    }
  }
});
