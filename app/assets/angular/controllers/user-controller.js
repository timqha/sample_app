angular
    .module('app')
    .controller('UserIndexController', function ($scope, UsersService, md5) {

        $scope.users = [];
        UsersService.getAll().success(function (data) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.users = data;
            $scope.currentPage = 1;
        }).
            error(function (data) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(data);
            });

        $scope.filteredUsers = []
            , $scope.numPerPage = 30
            , $scope.maxSize = 5;

        $scope.numPages = function () {
            return Math.ceil($scope.users.length / $scope.numPerPage);
        };

        $scope.$watch('currentPage', function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredUsers = $scope.users.slice(begin, end);
        });

        $scope.hashemail = function (email) {
            return md5.createHash(email);
        };

    })

    .controller('UserShowController', function ($scope, $stateParams, UsersService, md5) {

        $scope.microposts = [];
        UsersService.getUser($stateParams.id).success(function (data) {
            $scope.user = data.user;
            $scope.microposts = data.microposts;
            $scope.currentPage = 1;
            //console.log(data);
        })
        .error(function (data) {
            console.log(data);
        });
        $scope.filteredPosts = []
            , $scope.numPerPage = 30
            , $scope.maxSize = 5;
        $scope.numPages = function () {
            return Math.ceil($scope.microposts.length / $scope.numPerPage);
        };
        $scope.$watch('currentPage + numPerPage', function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.filteredPosts = $scope.microposts.slice(begin, end);
        });

        $scope.hashemail = function (email) {
            return md5.createHash(email);
        };

        $scope.timestamp = function(value){
            return new Date(value).getTime();
        };


    })
    .controller('UserDeleteController', function($stateParams, UserService){
      UserService.removeUser($stateParams.id);
    })
    .controller('UserSignInController', function(){

    });
