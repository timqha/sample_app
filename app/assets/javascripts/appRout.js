'use strict';

/* Module and routs */

var simpleApp = angular.module('simpleApp',[
    'ngRoute',
    'simpleControllers',
    'simpleServices'
]);


simpleApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/about',{
                templateUrl: 'static_pages/about.html.erb',
                controller: 'static_page'

        })

    }
]);





var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
