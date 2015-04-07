angular
    .module('Authentication')
    .controller('AuthSignInController',
    ['$scope', '$rootScope', '$state', '$location', 'AuthService',
        function($scope, $rootScope,  $state, $location, AuthService){
            AuthService.ClearCredentials();

            $scope.login = function() {
                $scope.dataLoading = true;
                AuthService.Login($scope.email, $scope.password, function(response){
                    if(response.success){
                        AuthService.SetCredentials($scope.email, $scope.password);
                        console.log("It's work");
                        $location.path('/home');

                    } else {
                        $scope.error = response.message;
                        console.log("It's not work");
                        $scope.dataLoading = false;
                    }
                });
            };
    }])
    .controller('AuthSignOutController',
    ['$scope', '$rootScope', 'AuthService',
        function($scope, $rootScope,  AuthService){
            AuthService.ClearCredentials();
            console.log("Log out!");
        }]);