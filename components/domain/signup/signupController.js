
// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('signupController', function($scope, $location, $http, clientService, questionService) {
        
    var State = {
      PENDING: "PENDING",
      IN_PROGRESS: "IN_PROGRESS",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
    };

    // init - steps
    $scope.firstStep = {
        label: "Step 1 - Create user",
        errorMessage: "",
        state: State.PENDING
    }
    $scope.secondStep = {
        label: "Step 2 - Setting up account",
        errorMessage: "",
        state: State.PENDING
    }
    $scope.thirdStep = {
        label: "Step 3 - Generating surveys",
        errorMessage: "",
        state: State.PENDING
    }

    $scope.loading         = false 

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
        
        // first step - create client
        $scope.firstStep.state  = State.IN_PROGRESS;
        clientService.register(credentials).then(function (response) {
            if(response.data.success) {
                $scope.firstStep.state  = State.COMPLETED;

                // second step - copy base questions
                $scope.secondStep.state  = State.IN_PROGRESS;
                questionService.copyBaseQuestionTable().then(function (response) {
                    if(response.data.success) {
                        $scope.secondStep.state  = State.COMPLETED;

                        // third step - copy base questions
                        $scope.thirdStep.state  = State.IN_PROGRESS;
                        questionService.copyBaseSubQuestionTable().then(function (response) {
                            if(response.data.success) {
                                $scope.thirdStep.state  = State.COMPLETED;

                            } else {
                                $scope.thirdStep.state  = State.FAILED;
                                $scope.thirdStep.errorMessage = response.data.errorMessage;
                            }
                        });
                    } else {
                        $scope.secondStep.state  = State.FAILED;
                        $scope.secondStep.errorMessage = response.data.errorMessage;
                    }
                });
            } else {
                $scope.firstStep.state  = State.FAILED;
                $scope.firstStep.errorMessage = response.data.errorMessage;
            }
        });




        // $scope.firstStep.state  = State.IN_PROGRESS;
        // var one = function() {
        //     $scope.firstStep.state  = State.COMPLETED;
        //     $scope.secondStep.state  = State.IN_PROGRESS;
        // }
        // var two = function() {
        //     $scope.secondStep.state  = State.FAILED;
        //     $scope.thirdStep.state  = State.IN_PROGRESS;
        // }
        // var three = function() {
        //     $scope.thirdStep.state  = State.COMPLETED;
        // }

        // $timeout(one, 2000);
        // $timeout(two, 4000);
        // $timeout(three, 6000); 
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