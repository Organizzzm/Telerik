App.controller('signupCtrl', function($scope, $location, auth, notifier){
    $scope.signup = function(user){
        auth.signup(user).then(function(res){
            notifier.success('Registration successful!');
            $location.path('/');
        })
    }
});