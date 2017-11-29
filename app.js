// create the module and name it waveCemApp
// also include ngRoute for all our routing needs
var waveCemApp = angular.module('waveCemApp', ['ngRoute']);

// routing
waveCemApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'components/applications/applications.html',
            controller  : 'applicationsController'
        })

        // route for the about page
        .when('/survey', {
            templateUrl : 'components/survey/survey.html',
            controller  : 'surveyController'
        })

        // route for the contact page
        .when('/application/:name', {
            templateUrl : 'components/application/application.html',
            controller  : 'applicationController'
        });
});

waveCemApp.factory('waveCemService', function() {
    return {
        getColorForCategory: function(category) {
            switch(category) {
                case "Contraintes legales":
                    return "indigo accent-4";
                case "Gestion des donnees":
                    return "light-blue accent-4";
                case "Contraintes fournisseurs":
                    return "cyan accent-4";
                case "Contraintes d'infrastructure":
                    return "teal accent-4";
                case "Contraintes logiciel":
                    return "green darken-4";
                case "Contraintes applicatives":
                    return "light-green accent-4";
                case "Contraintes projet":
                    return "lime accent-4";
                default:
                    return "deep-purple accent-4"
            }
        }
    };
});
