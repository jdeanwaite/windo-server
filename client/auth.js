angular.module('windoApp').factory('authService',
  function ($q, $timeout, $http) {

    console.log('mm');

    // create user variable
    var user = null;

    // return available functions for use in controllers
    return ({
      isLoggedIn: function () {
        console.log('checking logged in');
        // var deferred = $q.defer();
        // $timeout(function() {
        //   console.log('resolve');
        //   deferred.resolve(true);
        // }, 1000);
        // return deferred.promise;
        return $http.get('/login/status')
        .then(function(res) {
          console.log('status:', res.status);
          console.log('data:', res.data);
          return (res.data) ? true : false;
        }).catch(function(err) {
          console.log('err:', err);
          return false;
        });
      },
      login: false,
      logout: false,
      register: false,
      user: function () { console.log('returning'); return user; }
    });
});
