'use strict';
/*
# app/assets/javascripts/main.js.coffee

# This line is related to our Angular app, not to our
# HomeCtrl specifically. This is basically how we tell
# Angular about the existence of our application.
*/
var simpleApp = angular.module('simpleApp', ['ngRoute']);
/*
# This routing directive tells Angular about the default
# route for our application. The term "otherwise" here
# might seem somewhat awkward, but it will make more
# sense as we add more routes to our application.
    */
simpleApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
        when('/home', { templateUrl: '/home', controller: 'HomeCtrl' } )

        when('/help', { templateUrl: '/help', controller: 'HomeCtrl' } )

        otherwise({
            templateUrl: '/index',
            controller: 'HomeCtrl'
          });
}]);

