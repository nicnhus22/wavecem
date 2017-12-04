/**
 * Contains functions that are added to the root AngularJs scope.
 */
waveCemApp.run(function($rootScope, $state, $transitions, Auth, AUTH_EVENTS) {
	
	//before each state change, check if the user is logged in
	//and authorized to move onto the next state
	$transitions.onSuccess({}, function(transition) {
		var authorizedRoles = transition.to().data.authorizedRoles;
			if (!Auth.isAuthorized(authorizedRoles)) {
				console.log("not authorized")
				event.preventDefault();
			if (Auth.isAuthenticated()) {
				// user is not allowed
				$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
			} else {
				// user is not logged in
				$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
			}
		}

		console.log(
		  "Successful Transition from " + transition.from().name +
		  " to " + transition.to().name
		);
	});

	
	/* To show current active state on menu */
	$rootScope.getClass = function(path) {
		if ($state.current.name == path) {
			return "active";
		} else {
			return "";
		}
	}
	
	$rootScope.logout = function(){
		Auth.logout();
	};

});