'use strict';


waveCemApp.service('clientService', function($http) {

    this.register = function(client) {
        return $http({method: 'POST', data: JSON.stringify(client), url: 'https://nlkga26uzc.execute-api.eu-west-1.amazonaws.com/dev/client'})
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