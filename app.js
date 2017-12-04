// create the module and name it waveCemApp
// also include ngRoute for all our routing needs
var waveCemApp = angular.module('waveCemApp', ['ngRoute','ui.router']);

/*Constants regarding user login defined here*/
waveCemApp.constant('USER_ROLES', {
    all : '*',
    admin : 'admin',
    editor : 'editor',
    guest : 'guest'
}).constant('AUTH_EVENTS', {
    loginSuccess : 'auth-login-success',
    loginFailed : 'auth-login-failed',
    logoutSuccess : 'auth-logout-success',
    sessionTimeout : 'auth-session-timeout',
    notAuthenticated : 'auth-not-authenticated',
    notAuthorized : 'auth-not-authorized'
})

/* Adding the auth interceptor here, to check every $http request*/
waveCemApp.config(function ($httpProvider) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
})