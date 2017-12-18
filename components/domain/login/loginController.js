angular.module('waveCemApp').controller('loginController', [ '$scope', '$state','$rootScope','$location', '$window', 'Auth',
function($scope, $state,$rootScope,$location, $window, Auth ) {

	// $rootScope.hideNavBarControls();

	$scope.credentials = {};
	$scope.error = false;
	
	//when the form is submitted
	$scope.submit = function() {
		$scope.submitted = true;
		// do better checks
		if (typeof $scope.credentials.email != 'undefined' && typeof $scope.credentials.password != 'undefined') {
			$scope.login($scope.credentials);
		} else {
			$scope.error = true;
			return;
		}
	};

	//Performs the login function, by sending a request to the server with the Auth service
	$scope.login = function(credentials) {
		$scope.error = false;
		Auth.login(credentials, function(user) {
			$rootScope.showNavBarControls();
			$state.go('home');
		}, function(err) {
			$scope.error = true;
		});
	};

	// if a session exists for current user (page was refreshed)
	// log him in again
	if ($window.sessionStorage["userInfo"]) {
		var credentials = JSON.parse($window.sessionStorage["userInfo"]);
		$scope.login(credentials);
	}



} ]);