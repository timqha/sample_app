angular
    .module('app')
    .controller('UserIndexController', function ($scope, $http, md5) {

        $scope.users = [];
        $http.get('/api/users').success(function(data) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.users = data;
        }).
            error(function(data) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                    console.log(data);
            });

        $scope.makeTodos = function() {
            $scope.todos = [];
            for (i=1;i<=1000;i++) {
                $scope.todos.push({ text:'todo '+i, done:false});
            }
        };
        $scope.makeTodos();

        $scope.filteredUsers = []
            ,$scope.currentPage = 1
            ,$scope.numPerPage = 30
            ,$scope.maxSize = 5;


        $scope.numPages = function () {
            return Math.ceil($scope.users.length / $scope.numPerPage);
        };

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredUsers = $scope.users.slice(begin, end);
        });


        $scope.hashemail = function(email){
            return md5.createHash(email);
        };


    })

    .controller('UserShowController', ['$scope', 'stateParams', function ($scope, $stateParams) {
        $scope.user = User.show({id: $stateParams.id});

        $http.get('/api/users/:{id:$stateParams.id}').success(function(data) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.user = data;
            console.log(data);
        }).
            error(function(data) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(data);
            });
    }]);

