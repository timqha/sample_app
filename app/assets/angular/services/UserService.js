/*

 api_users GET    /api/users(.:format)        api/users#index {:format=>:json}
 new_api_user GET    /api/users/new(.:format)    api/users#new {:format=>:json}
 api_user GET    /api/users/:id(.:format)    api/users#show {:format=>:json}
 PATCH  /api/users/:id(.:format)    api/users#update {:format=>:json}
 PUT    /api/users/:id(.:format)    api/users#update {:format=>:json}
 DELETE /api/users/:id(.:format)    api/users#destroy {:format=>:json}

 */
angular
    .module('app')
    .factory('User', function ($resource) {
        return $resource('api/users/:id.json');
    });

angular.module('app')
    .factory('UsersService', [
        'Restangular', 'Users', function (Restangular, Users) {
            var model;
            model = 'usersmodel';

            Restangular.extendModel(model, function (obj) {
                angular.extend(obj, Users);
            });
            console.log(Restangular.all(model).getList);
            return {
                list: function () {
                    return Restangular.all(model).getList();
                }
            };


        }
    ]);


/*
 angular
 .module('app')
 .factory('User', function ($resource,$http) {
 return $http({method: 'GET', url: 'api/users.json'}).success(function(data){
 console.log(data);
 });
 });
 */
/*angular
 .module('app')
 .factory('User', [$http, User],
 function ($http) {
 o.getAll = function () {
 return $http.get('api/users.json').success(function (data) {

 angular.copy(data, o.users);
 });
 };
 o.create = function(user){
 return $http.get('api/users.json', post).success(function(data){
 o.users.push(data);
 })
 }
 });
 */

/*
 angular.module('app').factory 'User', ($resource) ->
 class User
 constructor:(userId) ->
 @service = $resource('/api/users/:id',
 {user_id: userId, id: '@id'})

 create: (attrs) ->
 new @service(user: attrs).$save (user) ->
 attrs.id = user.id
 attrs
 #new @service(task: attrs).$save()

 all: ->
 @service.query()

 # получитьс список всех пользователей
 # $scope.users = User(userId).all()

 */
/*
 angular
 .module('app')
 .factory("User", function($resource) {
 return $resource("/api/users/:id", { id: "@id" },
 {
 'get':     {method: 'GET' },
 'save':    { method: 'POST' },
 'query':   { method: 'GET', isArray: true },
 'show':    { method: 'GET', isArray: false },
 'update':  { method: 'PUT' },
 'destroy': { method: 'DELETE' }
 }
 );
 });

 */













