var App = angular.module('App', ['ngRoute', 'ngResource']).value('toastr', toastr);

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({ enabled: true, requireBase: false });

    var routeUserChecks = {
        adminRole:{
            authenticate: function(auth){
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function (auth) {
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mainCtrl'
        })
        .when('/courses', {
            templateUrl: '/partials/courses/courses-list',
            controller: 'coursesListCtrl'
        })
        .when('/courses/:id', {
            templateUrl: '/partials/courses/course-detaile',
            controller: 'coursesDetailsCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'signupCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'profileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'userListCtrl',
            resolve: routeUserChecks.adminRole
        })
}]);

App.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});