angular.module('app', [
    'ui.router',
    'templates',
    'ui.bootstrap'
 //   'ngResource'
    //  'ngRoute'

])
    ///  посмотреть как в он себя ведёт в rest client
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider,RestangularProvider) {

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
            .state('users', {
                url: '/users',
                templateUrl: 'users/_index.html',
                controller: 'UserIndexController'

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