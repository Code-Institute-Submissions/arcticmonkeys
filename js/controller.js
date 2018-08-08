angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, store) {
        $scope.title = "Welcome To Arctic Monkeys";
    })
    .controller('RegisterController', function($location, $rootScope, $scope, UserAPIService, store) {
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
                $rootScope.username = store.get('username');
                $location.path("/");
            }).catch(function(err) {
                console.log(err.data);
            });
        };

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered to Arctic Monkeys, you can buy tickets now!");
                    $scope.login();
                }).catch(function(err) {
                    alert("Oops! Something went wrong!");
                });
            }
        };

    })

    .controller('LoginController', function($location, $rootScope, $scope, UserAPIService, store) {
        $scope.loginUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.submitForm = function() {
            if ($scope.loginForm.$valid) {
                $scope.loginUser.username = $scope.user.username;
                $scope.loginUser.password = $scope.user.password;

            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.loginUser).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.loginUser.username);
                store.set('authToken', $scope.token);
                $rootScope.username = store.get('username');
                alert("You have successfully logged in as " + $scope.loginUser.username + ".");
                $location.path("/");
            }).catch(function(err) {
                console.log(err.data);
                alert("Incorrect username or password!");
            });


            }
        };
    })

    .controller('LogoutController', function($rootScope, $scope, store) {
        $scope.logoutMessage = "Logout successful";

        store.remove('username');
        store.remove('authToken');
        $rootScope.username = null;
    })
    .controller('TodoController', function($scope, $location, bandAPIService, store) {
        if (!store.get('authToken')) {
           $location.path("/accounts/register");
           alert("You must create an account, or login, before accessing the website!");
        }

        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');

        $scope.todos = [];

});
