angular.module('windoApp')
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      // .state('login', {
      //   url: '/login',
      //   template: '<login layout="column" layout-fill></login>'
      // })
      .state('dashboard', {
        url: '/app/',
        template: '<dashboard layout="column" layout-fill></dashboard>'//,
        // resolve: {
        //   currentUser: ($q) => {
        //     if (!Meteor.userId()) {
        //       return $q.reject('AUTH_REQUIRED');
        //     }
        //     else {
        //       return $q.resolve();
        //     }
        //   }
        // }
      })
      .state('create', {
        url: '/app/create/',
        template: '<create layout="column" layout-fill></create>'//,
      //   resolve: {
          // currentUser: ($q) => {
          //   if (!Meteor.userId()) {
          //     return $q.reject('AUTH_REQUIRED');
          //   }
          //   else {
          //     return $q.resolve();
          //   }
          // }
      //   }
      })
      .state('login', {
         url: '/app/login/',
         template: '<login layout="column" layout-fill></login>'//,
         // resolve: {
         //
         // }
      })
      .state('register', {
         url: '/app/register/',
         template: '<register layout="column" layout-fill></register>'//,
         // resolve: {
         //
         // }
      })
      // .state('event', {
      //   url: '/event/:eventId',
      //   template: '<event layout="column" layout-fill></event>',
      //   resolve: {
      //     currentUser: ($q) => {
      //       if (!Meteor.userId()) {
      //         return $q.reject('AUTH_REQUIRED');
      //       }
      //       else {
      //         return $q.resolve();
      //       }
      //     }
      //   }
      // });

    $urlRouterProvider.otherwise("/app/");
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        // $state.go('login');
      }
    });
  });
