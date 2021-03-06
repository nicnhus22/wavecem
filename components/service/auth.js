
waveCemApp.factory('Auth', [ '$http', '$rootScope','$location', '$window', 'Session', 'AUTH_EVENTS', 'USER_ROLES', 
    function($http, $rootScope,$location, $window, Session, AUTH_EVENTS, USER_ROLES) {
        var authService = {};
        
        
        //the login function
        authService.login = function(user, success, error) {

            $http.post('components/users.json').success(function(data) {
            
            //this is my dummy technique, normally here the 
            //user is returned with his data from the db
            var users = data.users;
            if(users[user.email]){
                var loginData = users[user.email];
                //insert your custom login function here 
                if(user.email == loginData.email && user.password == loginData.password){
                    //set the browser session, to avoid relogin on refresh
                    $window.sessionStorage["userInfo"] = JSON.stringify(loginData);
                    
                    //delete password not to be seen clientside 
                    delete loginData.password;
                    
                    //update current user into the Session service or $rootScope.currentUser
                    //whatever you prefer
                    Session.create(loginData);
                    //or
                    $rootScope.currentUser = loginData;
                    
                    //fire event of successful login
                    $rootScope.$emit(AUTH_EVENTS.loginSuccess);
                    //run success function
                    success(loginData);
                } else{
                    //OR ELSE
                    //unsuccessful login, fire login failed event for 
                    //the according functions to run
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    error();
                }
            }   
            });
            
        };

        //check if the user is authenticated
        authService.isAuthenticated = function() {
            return !!Session.user;
        };
        
        //check if the user is authorized to access the next route
        //this function can be also used on element level
        //e.g. <p ng-if="isAuthorized(authorizedRoles)">show this only to admins</p>
        authService.isAuthorized = function(authorizedRoles) {
            
            if(authorizedRoles.indexOf(USER_ROLES.all) > -1) {
                return true;
            } else {
                if (!angular.isArray(authorizedRoles)) {
                  authorizedRoles = [authorizedRoles];
                }

                return (authService.isAuthenticated() &&
                  authorizedRoles.indexOf(Session.userRole) !== -1);
            }
            
        };
        
        //log out the user and broadcast the logoutSuccess event
        authService.logout = function(){
            Session.destroy();
            $window.sessionStorage.removeItem("userInfo");
            // $rootScope.$emit(AUTH_EVENTS.logoutSuccess); because not working ??
            $rootScope.hideNavBarControls();
            $location.path('/login');
        }

        return authService;
} ]);   
