
// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('signupController', function($scope, $location, $http, clientService, $timeout) {
        
    var State = {
      PENDING: "PENDING",
      IN_PROGRESS: "IN_PROGRESS",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
    };

    $scope.loading         = false 
    $scope.stateFirstStep  = State.PENDING;
    $scope.stateSecondStep = State.PENDING;
    $scope.stateThirdStep  = State.PENDING; 

    $scope.credentials = {};

    //when the form is submitted
    $scope.submit = function() {
        // do better checks
        if (typeof $scope.credentials.email != 'undefined' && 
            typeof $scope.credentials.name != 'undefined' && 
            typeof $scope.credentials.password != 'undefined' &&
            typeof $scope.credentials.password_repeat != 'undefined') {
            $scope.signup($scope.credentials);
        } else {
            $scope.error = true;
            // $scope.loading = false;
            return;
        }
    };


    $scope.signup = function(credentials) {
        $scope.loading = true;
        
        $scope.stateFirstStep  = State.IN_PROGRESS;
        var one = function() {
            $scope.stateFirstStep  = State.COMPLETED;
            $scope.stateSecondStep  = State.IN_PROGRESS;
        }
        var two = function() {
            $scope.stateSecondStep  = State.FAILED;
            $scope.stateThirdStep  = State.IN_PROGRESS;
        }
        var three = function() {
            $scope.stateThirdStep  = State.COMPLETED;
        }

        $timeout(one, 2000);
        $timeout(two, 4000);
        $timeout(three, 6000);

        
        // $scope.stateFirstStep  = State.COMPLETED;


        // clientService.register(credentials).then(function (response) {
        //     if(response.data.success) {
        //         $scope.isFirstStepDone  = true



        //     } else {
        //         $scope.isFirstStepDone  = false 
        //     }
        // });
    }

    $scope.$watch('loading', function() {
        if($scope.loading) {
            // disable submit button
            $('button[type="submit"]').prop('disabled', true);
            // show loading block
            $('#loading_overlay').css("display","block");
        } else {
            // enable submit button
            $('button[type="submit"]').prop('disabled', false);
            // hide loading block
            $('#loading_overlay').css("display","none");
        }
    });
});