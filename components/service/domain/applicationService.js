'use strict';


waveCemApp.service('applicationService', function($http, API_ROUTES) {

    this.getAll = function() {
        return $http({method: 'GET', url: API_ROUTES.BASE_URL+API_ROUTES.APPLICATIONS})
        		.success(handleSuccess)
        		.error(handleError);
    }

    this.create = function(application) {
        return $http({method: 'POST', data: JSON.stringify(application), url: API_ROUTES.BASE_URL+API_ROUTES.APPLICATIONS})
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