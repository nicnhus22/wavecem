
// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationsController', function($scope, $location, $http, helperFactory) {
        

    angular.element(document).ready(function () {
    	$('select').material_select();
        $('.modal').modal();
    });

    $scope.$watch('applications', function() {
        $scope.computeOverviewData()
    }, true);
    $scope.addedApplication = {
    	status:"TBC",
    	progress:0
    };

    // setup nav
    $("#nav_survey").removeClass("active");
    $("#nav_applications").addClass("active");



    

    // route 
    $scope.viewApplication = function(application) {
    	$location.path('/application/'+application.application);
    }

    $scope.computeOverviewData = function() {
        $scope.overviewData = {all:0,eli:0,euc:0,nel:0,tbc:0}
        $scope.applications.forEach(function(application) {
            switch(application.status) {
                case "ELI":
                    $scope.overviewData.eli += 1;
                    break;
                case "EUC":
                    $scope.overviewData.euc += 1;
                    break;
                case "NEL":
                    $scope.overviewData.nel += 1;
                    break;
                case "TBC":
                    $scope.overviewData.tbc += 1;
                    break;
            }
            $scope.overviewData.all += 1;
        });
    }

    /**
        When the user clicks submit application
    **/
    $scope.submitAddApplication = function() {

        if($scope.addedApplication.application != "") {
            $http({method: 'POST', data: JSON.stringify($scope.addedApplication), url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/application'}).success(function(data) {
                $scope.applications.push(data);
                $('#addApplicationModal').modal('close');
                // notification maybe ?
            }).error(function(error){
                // handle error
            });
        } else {
            // show error
        }
    }

    /**
        When the user clicks add application
    **/
    $scope.addApplication = function() {
        $scope.addApplication.id = helperFactory.getRandomNumber();
        $('#addApplicationModal').modal('open');
    }

    /**
        Fetches all the applications
    **/
    $scope.fetchApplications = function() {
        $http({method: 'GET', url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/application'}).success(function(data) {
            $scope.applications = data.Items
            $scope.computeOverviewData();
        }).error(function(error){
            // handle error
        });
    }
    $scope.fetchApplications();
});




