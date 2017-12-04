waveCemApp.config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES',
  function($stateProvider, $urlRouterProvider, USER_ROLES) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
      .state('home', {
          url: "/",
          templateUrl: "components/domain/applications/applications.html",
          controller:"applicationsController",
          data: {
              authorizedRoles: [USER_ROLES.admin]
          }
    })
    .state('application', {
        url: "/application/:name",
        controller:"applicationController",
        templateUrl: "components/domain/application/application.html",
        data: {
            authorizedRoles: [USER_ROLES.admin]
        }
    })
    .state('survey', {
        url: "/survey",
        templateUrl: "components/domain/survey/survey.html",
        controller:"surveyController",
        data: {
            authorizedRoles: [USER_ROLES.admin]
        }         
    });
}]);
