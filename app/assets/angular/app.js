angular.module('Authentication', []);
angular.module('app', [
    'ui.router',
    'templates',
    'ui.bootstrap',
    'angular-md5',
    //'angular-loading-bar'
    //'ng-token-auth',
    'Authentication',
    'ngCookies'
    //   'ngResource'
    //  'ngRoute'

])


    .config(function ($stateProvider, $urlRouterProvider) {

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
                controller: 'AuthSignupController'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'sessions/new.html',
                controller: 'AuthSignInController'
            })
            .state('signout', {
                url: '/signout',
                controller: 'AuthSignOutController'
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
                controller: 'UserIndexController',
                secure: true
            })
            .state('users.show', {
                url: '/:id/show',
                parent: 'users',
                templateUrl: 'users/show.html',
                controller: 'UserShowController',
                secure: true
            })
            .state('users.destroy', {
                url: '/:id/destroy',
                parent: 'users',
                templateUrl: 'users/delete.html',
                controller: 'UserDeleteController',
                secure: true
            });
        $urlRouterProvider.otherwise('home');

    })
    .run(function ($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['app'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
             /*  if ($location.path() !== '/signin' && !$rootScope.globals.currentUser) {
                    $location.path('/signin');
                }
           */
                var nextRoute = $location.path();
                if (nextRoute.secure && !$rootScope.globals.currentUser) {
                    $location.path('/signin');
                }
            });
        });
/*
 .run(function($rootScope, md5) {
 $rootScope.hashemail = function(email) {
 return md5.createHash(email);
 };
 })
 */

