angular
    .module('app')
 /*   .controller('UserInsdfsdfsdController', function ($scope, $http) {

        $scope.users = [];
        $http.get('/api/users').success(function(data) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.users = data.users;

            $scope.filteredTodos = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 10
                ,$scope.maxSize = 5;

            $scope.makeTodos = function() {
                $scope.todos = [];
                for (i=1;i<=1000;i++) {
                    $scope.todos.push({ text:'todo '+i, done:false});
                }
            };

            $scope.makeTodos();

            $scope.numPages = function () {
                return Math.ceil($scope.todos.length / $scope.numPerPage);
            };

            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

                $scope.filteredTodos = $scope.todos.slice(begin, end);
            });


        }).
            error(function(data) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            //    console.log(data);
                $scope.users= 'Errror in UserInController';
            });
    })*/
    .controller('UserIndexController', function ($scope, $http) {

        $scope.users = [];
        $http.get('/api/users').success(function(data) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.users = data;
        }).
            error(function(data) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                //    console.log(data);
                $scope.users= 'Errror in UserInController';
            });
    })

    .controller('UserShowController', ['$scope', '$routeParams', 'User', function ($scope, $routeParams, User) {
        $scope.user = User.show({id: $routeParams.id});
    }]);

