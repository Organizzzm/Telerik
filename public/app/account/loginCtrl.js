App.controller('LoginCtrl', ['$scope', 'notifier', 'identity','auth', '$location', function($scope, notifier, identity, auth, $location){
    $scope.identity = identity;

    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                notifier.success('Successful login!');
            }else{
                $scope.user.username = $scope.user.password = '';
                notifier.error('Username/Password is not valid!');
            }
        });
    }
    $scope.logout = function(){
        auth.logout().then(function(success){
            if($scope.user){
                $scope.user.username = $scope.user.password = '';
            }
            $location.path('/');
            notifier.success('Successful logout!');
        });

    }
}]);