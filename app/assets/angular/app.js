angular.module('app', [
    'ui.router',
    'templates',
    'ui.bootstrap',
    'angular-md5',
    //'angular-loading-bar'
    'ng-token-auth'
    //   'ngResource'
    //  'ngRoute'

])


    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'static/_home.html',
                controller: 'StaticHomeController'
            })
            .state('about', {
                url: '/about',
                templateUrl: "static/_about.html",
                controller: 'StaticAboutController'
            })
            .state('help', {
                url: '/help',
                templateUrl: 'static/_help.html',
                controller: "StaticHelpController"
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'static/_contact.html',
                controller: 'StaticContactController'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'users/new.html',
                //template: "<div>help</div>",
                controller: 'StaticHelpController'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'sessions/new.html',
                controller: 'UserSignInController'
            })
            .state('signout', {
                url: '/signout',
                controller: 'UserSignOutController'
            })

            .state('users', {
                url: '/users',
                abstract: true,
                templateUrl: 'users/layouts.html'

            })
            .state('users.index', {
                url: '/index',
                parent: 'users',
                templateUrl: 'users/index.html',
                controller: 'UserIndexController'
            })
            .state('users.show', {
                url: '/:id/show',
                parent: 'users',
                templateUrl: 'users/show.html',
                controller: 'UserShowController'
            })
            .state('users.destroy', {
                url: '/:id/destroy',
                parent: 'users',
                templateUrl: 'users/delete.html',
                controller: 'UserDeleteController'
            });
        $urlRouterProvider.otherwise('home');

    }]);
/*
 .run(function($rootScope, md5) {
 $rootScope.hashemail = function(email) {
 return md5.createHash(email);
 };
 })
 */

