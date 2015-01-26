App.controller('coursesListCtrl', function($scope, CachedCourses){
    $scope.courses = CachedCourses.query();
});