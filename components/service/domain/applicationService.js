'use strict';


waveCemApp.service('applicationService', function($http) {

    this.getAll = function() {
        return $http({method: 'GET', url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/application'})
        		.success(handleSuccess)
        		.error(handleError);
    }

    this.create = function(application) {
        return $http({method: 'POST', data: JSON.stringify(application), url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/application'})
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