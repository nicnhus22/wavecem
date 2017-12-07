
// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationsController', function($scope, $location, $http, helperFactory, applicationService) {
        
    // setup view 
    $("#nav_survey").removeClass("active");
    $("#nav_applications").addClass("active");

    angular.element(document).ready(function () {
    	$('select').material_select();
        $('.modal').modal();
    });

    // watch variables
    $scope.$watch('applications', function() {
        // $scope.computeOverviewData()
    }, true);
    $scope.addedApplication = {
    	status:"TBC",
    	progress:0
    };

    // fetch applications
    applicationService.getAll().then(function (response) {
        $scope.applications = response.data.Items;
        $scope.computeOverviewData();
    });

    // route 
    $scope.viewApplication = function(application) {
    	$location.path('/application/'+application.application);
    }

    $scope.computeOverviewData = function() {
        if(typeof $scope.applications != 'undefined') {
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
    }

    /**
        When the user clicks submit application
    **/
    $scope.submitAddApplication = function() {
        if($scope.addedApplication.application != "") {
            applicationService.create($scope.addedApplication).then(function (response) {
                if(response.data) {
                    $scope.applications.push(response.data);
                    $('#addApplicationModal').modal('close');
                } else {
                    // show error
                }
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
        
    }
    $scope.fetchApplications();
});




