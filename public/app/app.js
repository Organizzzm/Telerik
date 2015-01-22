var App = angular.module('App', ['ngRoute', 'ngResource']);

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mainCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);