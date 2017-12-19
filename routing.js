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
    .state('login', {
          url: "/login",
          templateUrl: "components/domain/login/login.html",
          controller:"loginController",
          data: {
              authorizedRoles: []
          }
    })
    .state('signup', {
          url: "/signup",
          templateUrl: "components/domain/signup/signup.html",
          controller:"signupController",
          data: {
              authorizedRoles: [USER_ROLES.all]
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

// static API routes
waveCemApp.constant('API_ROUTES', {

    BASE_URL : 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev',
    
    APPLICATIONS        : '/applications',
    
    BASE_QUESTIONS      : '/basequestions',
    BASE_SUB_QUESTIONS  : '/basesubquestions',

    CLIENTS             : '/clients'
    
})
