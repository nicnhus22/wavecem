
// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationsController', function($scope, $location, $http, helperFactory) {
    
    angular.element(document).ready(function () {
    	$('select').material_select();
        $('.modal').modal();
    });

    $scope.addedApplication = {
    	status:"TBC",
    	progress:0
    };

    // setup nav
    $("#nav_survey").removeClass("active");
    $("#nav_applications").addClass("active");



    $scope.overviewData = {
    	all:100,
    	el:70,
    	uc:25,
    	ne:2,
    	tc:3,
    }

    // route 
    $scope.viewApplication = function(application) {
    	$location.path('/application/'+application.name);
    }

    $scope.addApplication = function() {
    	$scope.addApplication.id = waveCemService.getRandomNumber();
    	$('#addApplicationModal').modal('open');
    }

    $scope.submitAddApplication = function() {
    	$scope.applications.push($scope.addedApplication);
    	$('#addApplicationModal').modal('close');


    }

    
    // $http({method: 'JSON', url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/beta/application'}).success(function(data) {
    //   console.log(data);
    //   $scope.applications = data; // response data 
    // });


    $scope.applications = [
    	{
	   		name:"spring-breeze-9662",
	   		status:"ELI",
	   		progress:100,
	   	},{
	   		name:"winter-leaf-1757",
	   		status:"ELI",
	   		progress:100,
	   	},{
	   		name:"long-darkness-9308",
	   		status:"ELI",
	   		progress:100,
	   	},{
	   		name:"weathered-brook-3783",
	   		status:"TBC",
	   		progress:83,
	   	},{
	   		name:"misty-violet-8468",
	   		status:"NEL",
	   		progress:100,
	   	},{
	   		name:"throbbing-dew-8506",
	   		status:"NEL",
	   		progress:100,
	   	},{
	   		name:"spring-breeze",
	   		status:"TBC",
	   		progress:54,
	   	},{
	   		name:"sdawn-firefly-5043",
	   		status:"NEL",
	   		progress:100,
	   	}
    ];

});
