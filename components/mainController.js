'use strict';

// create the controller and inject Angular's $scope
waveCemApp.controller('mainController', ['$scope', '$rootScope', '$location', 'Auth','Session', 'AUTH_EVENTS','USER_ROLES',
	function($scope, $rootScope, $location, Auth, Session, AUTH_EVENTS, USER_ROLES){
		// this is the parent controller for all controllers.
		// Manages auth login functions and each controller
		// inherits from this controller	

		var showLoginDialog = function() {
			$location.path('/login');
		};
		
		var setCurrentUser = function(){
			$scope.currentUser = $rootScope.currentUser;
		}
		
		var showNotAuthorized = function(){
			console.log("not authorized")
		}
		
		$scope.currentUser = undefined;
		$scope.userRoles = USER_ROLES;
		$scope.isAuthorized = Auth.isAuthorized;

		//listen to events of unsuccessful logins, to run the login dialog
		

		$rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
		$rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginDialog);
		$rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginDialog);
		$rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginDialog);
		$rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);

		

		
}]);

waveCemApp.directive('permission', ['Auth', function(Auth) {
   return {
       restrict: 'A',
       scope: {
          permission: '='
       },
 
       link: function (scope, elem, attrs) {
            scope.$watch(Auth.isAuthenticated(), function() {
                if (!Auth.isAuthorized(scope.permission)) {
                    elem.remove();
                } 
            });                
       }
   }
}]);