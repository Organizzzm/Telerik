var App = angular.module('App', ['ngRoute', 'ngResource']).value('toastr', toastr);

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    //$locationProvider.html5Mode({ enabled: true, requireBase: false });

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mainCtrl'
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'userListCtrl',
            resolve: {
                auth: function(auth){
                    return auth.isAuthorizedForRole('admin');
                }
            }
        })
}]);

App.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});