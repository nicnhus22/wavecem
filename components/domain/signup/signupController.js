
// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('signupController', function($scope, $location, $http, clientService) {
        
    
    $scope.credentials = {};

    //when the form is submitted
    $scope.submit = function() {
        $scope.submitted = true;
        // do better checks
        if (typeof $scope.credentials.email != 'undefined' && 
            typeof $scope.credentials.name != 'undefined' && 
            typeof $scope.credentials.password != 'undefined' &&
            typeof $scope.credentials.password_repeat != 'undefined') {
            $scope.signup($scope.credentials);
        } else {
            $scope.error = true;
            return;
        }
    };


    $scope.signup = function(credentials) {

        clientService.register(credentials).then(function (response) {
            if(response.data.success) {

            } else {
                
            }
        });
    }

});