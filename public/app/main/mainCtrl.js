App.controller('mainCtrl', function($scope, CachedCourses){
    $scope.courses = CachedCourses.query();
});