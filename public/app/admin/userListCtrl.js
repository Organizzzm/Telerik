App.controller('userListCtrl', function($scope, UserResource){
    $scope.users = UserResource.query();
});