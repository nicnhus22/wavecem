'use strict';


waveCemApp.service('clientService', function($http,API_ROUTES) {

    this.register = function(client) {
        return $http({method: 'POST', data: JSON.stringify(client), url: API_ROUTES.BASE_URL+API_ROUTES.CLIENTS})
        		.success(handleSuccess)
        		.error(handleError);
    }

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