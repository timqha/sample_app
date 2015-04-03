
angular
    .module('app')
    .controller('StaticHelpController', ['$scope', function ($scope) {
        $scope.text = "Help";
    }])
    .controller('StaticHomeController', ['$scope', function ($scope) {
        $scope.text = "Home";
    }])
    .controller('StaticAboutController', ['$scope', function ($scope) {
        $scope.text = "About";
    }])
    .controller('StaticContactController', ['$scope', function ($scope) {
        $scope.text = "Contact";
    }]);