'use strict';


waveCemApp.service('questionService', function($http) {

    this.getBaseQuestions = function() {
        return $http({method: 'GET', url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/basequestion'})
        		.success(handleSuccess)
        		.error(handleError);
    }

    this.getBaseSubQuestions = function() {
        return $http({method: 'GET', url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/basesubquestion'})
                .success(handleSuccess)
                .error(handleError);
    }

    this.copyBaseQuestionTable = function() {

    }

    

    this.copyBaseSubQuestionTable = function() {

    }

    // private functions

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

	return this;
});