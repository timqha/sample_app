angular.module('app', [
    'ui.router',
    'templates',
    'ui.bootstrap',
    'angular-md5',
    'angular-loading-bar'

    //   'ngResource'
    //  'ngRoute'

])
    ///  посмотреть как в он себя ведёт в rest client
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
                //template: "<div>help</div>",
                controller: 'StaticHelpController'
            })
            /*
            .state('users', {
                url: '/users',
                //abstract: true,
                templateUrl: 'users/index.html',
                controller: 'UserIndexController'
            })
            .state('users.index',{
                url: '/index',
                parent: 'users',
                templateUrl: 'users/index.html'
              //  controller: 'UserIndexController'
            })
            .state('users.show', {
                url: '/{id}',
                parent: 'users',
                templateUrl: 'users/show.html'
           //     controller: 'UserShowController'
            });

*/

        .state('users', {
            url: '/users',
            abstract: true,
            templateUrl: 'users/layouts.html'

        })
            .state('users.index',{
                url: '/index',
                parent: 'users',
                templateUrl: 'users/index.html',
                  controller: 'UserIndexController'
            })
            .state('users.show', {
                url: '/:id/show',
                parent: 'users',
                templateUrl: 'users/show.html'

                //controller: 'UserShowController'
            })
            .state('users.delete',{
                url: '/:id/delete',
                parent: 'users',
                templateUrl: 'users/delete.html'
            });
        $urlRouterProvider.otherwise('home');

    }]);


/*
 .config('$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

 //$locationProvider.html5Mode(true);
 $routeProvider
 .when("/help",{
 templateUrl: "static/_help.html",
 controller: "StaticHelp"
 })
 .when("/home",{
 templateUrl: 'static/_home.html',
 controller: "StaticHome"
 })
 .when("/about",{
 templateUrl: "static/_about.html",
 controller: "StaticAbout"
 })
 .when("/contact",{
 templateUrl: "static/_contact.html",
 controller: "StaticContact"
 });


 });
 /*.config(function ($httpProvider) {
 $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
 });

 */