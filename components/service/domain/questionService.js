'use strict';


waveCemApp.service('questionService', function($http, API_ROUTES) {

    this.getBaseQuestions = function() {
        return $http({method: 'GET', url: API_ROUTES.BASE_URL+API_ROUTES.BASE_QUESTIONS})
        		.success(handleSuccess)
        		.error(handleError);
    }

    this.getBaseSubQuestions = function() {
        return $http({method: 'GET', url: API_ROUTES.BASE_URL+API_ROUTES.BASE_SUB_QUESTIONS})
                .success(handleSuccess)
                .error(handleError);
    }

    this.copyBaseQuestionTable = function() {
        return $http({method: 'POST', url: API_ROUTES.BASE_URL+API_ROUTES.BASE_QUESTIONS_COPY})
                .success(handleSuccess)
                .error(handleError);
    }

    this.copyBaseSubQuestionTable = function() {
        // copy base sub questions
        $http({method: 'POST', url: API_ROUTES.BASE_URL+API_ROUTES.BASE_SUB_QUESTIONS_COPY})
                .success(handleSuccess)
                .error(handleError);
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