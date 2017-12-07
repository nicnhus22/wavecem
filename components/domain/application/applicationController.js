

// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationController', function($scope, $http, $stateParams, helperFactory, questionService, API_ROUTES) {

	// initialize
	$('ul.tabs').tabs();

    // here fetch app with name
    $scope.application = {
    	name:$stateParams.name,
   		status:"ELI",
   		progress:100,
    }
    $scope.mandatoryQuestions = {};
    $scope.subQuestions = {};


    // get base questions
    questionService.getBaseQuestions().then(function (response) {
        if(typeof response.data != 'undefined') {
            $scope.mandatoryQuestions = response.data.Items;
            // get sub questions
            questionService.getBaseSubQuestions().then(function (response) {
                if(typeof response.data != 'undefined') {
                    // map subquestions to question
                    response.data.Items.forEach(function(subQuestion) {

                        var subQuestionIDToArray = subQuestion.id.split("-"); 
                        subQuestionIDToArray.splice(2,1); // remove third element
                        var categoryID = subQuestionIDToArray.join("-");
                        
                        if(categoryID in $scope.subQuestions) {
                            $scope.subQuestions[categoryID].push(subQuestion);
                        } else {
                            $scope.subQuestions[categoryID] = [subQuestion];
                        }
                    });  
                } 
            });
        } 
    });

	/**
		Map categories to colors
		returns a color with the Materialize format (ie. ligthen blue)
	**/	    
    $scope.getColorForCategory = function(category) {
        return helperFactory.getColorForCategory(category);
    }

	/**
		Map categories to colors
		returns a hexadecimal color 
	**/	 
    $scope.getHexColorForCategory = function(category) {
        return helperFactory.getHexColorForCategory(category);
    }

});








