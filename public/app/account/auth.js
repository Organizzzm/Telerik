App.factory('auth', function($q, identity, $http, UserResource){
    return{
        login: function(user){
            var deferred = $q.defer();
            $http.post('/login', user).success(function(res){
                if(res.success){
                    var user = new UserResource;
                    angular.extend(user, res.user);
                    identity.currentUser = user;
                    deferred.resolve(true);
                }else{
                    deferred.resolve(false);
                }
            });
            return deferred.promise;
        },
        logout: function(){
            var deferred = $q.defer();
            $http.post('/logout').success(function(){
                identity.currentUser = undefined;
                deferred.resolve(true);
            });

            return deferred.promise;
        },
        isAuthorizedForRole: function(role) {
            if (identity.isAuthorizedForRole(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            };
        }
    }
})