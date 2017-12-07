

// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationController', function($scope, $http, $stateParams, helperFactory, API_ROUTES) {

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


    /**
        Fetches all the base questions
    **/
    $scope.fetchBaseQuestions = function() {
        $http({method: 'GET', url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/basequestion'}).success(function(data) {
            $scope.mandatoryQuestions = data.Items
            $scope.fetchSubQuestions();
        }).error(function(error){
            // handle error
        });
    }
    $scope.fetchBaseQuestions();

    /**
        Fetches all the client's sub questions
    **/
    $scope.fetchSubQuestions = function() {
        $http({method: 'GET', url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/subquestion'}).success(function(data) {
            // map subquestions to question
            data.Items.forEach(function(subQuestion) {

                var subQuestionIDToArray = subQuestion.id.split("-"); 
                subQuestionIDToArray.splice(2,1); // remove third element
                var categoryID = subQuestionIDToArray.join("-");
                
                if(categoryID in $scope.subQuestions) {
                    $scope.subQuestions[categoryID].push(subQuestion);
                } else {
                    $scope.subQuestions[categoryID] = [subQuestion];
                }
            });
        }).error(function(error){
            // handle error
        });
    }
    // need to calls to get answers


    // $scope.subQuestions = [{
    // 	id:"A-01-01",
    // 	question:"Etes-vous sujets a des lois ou reglementations dans le cadre onnelles ou bancaires, applications du SIIV etc.) ?",
    // 	answer:"unknown",
    // 	category:"Contraintes legales"
    // },{
    // 	id:"A-01-02",
    // 	question:"Avez-vous des besoins specifiques concernant lacurite de la donnee type chiffrement ou anonymisation etc.) ?",
    // 	answer:"no",
    // 	category:"Contraintes legales"
    // },{
    // 	id:"B-01-01",
    // 	question:"Avez-vous des contraintes liees au fournisne, mode SaaS, criteres de reversibilite etc.) ?",
    // 	answer:"yes",
    // 	category:"Gestion des donnees"
    // }];

    /*
    	This gets all the sub questions given a mandatory question
    	It looks for the first letter to determine whether or not a subquestion is in the right category
    */
  //   $scope.getSubQuestions = function(question) {
  //   	var subQuestionFiltered = $.grep($scope.subQuestions, function(q) {
		//     return q.id.charAt(0) === question.id.charAt(0);
		// });

  //   	return subQuestionFiltered;
  //   }

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








