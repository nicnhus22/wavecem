
// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationsController', function($scope, $location) {
    	
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

    $scope.viewApplication = function(application) {
    	console.log(application);

    	$location.path('/application/'+application.name);
    }

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
	   	},
    ]

    $scope.message = 'Everyone come and see how good I look!';
});
