App.factory('auth', function($q, identity, $http, UserResource){
    return{
        signup: function(user){
            var deferred = $q.defer();

                var user = new UserResource(user);
                user.$save().then(function(){
                    identity.currentUser = user;
                    deferred.resolve(true);
                }, function(res){
                    deferred.reject(res);
                });

            return deferred.promise;
        },
        update: function(user){
            var deferred = $q.defer();

            var updatedUser = new UserResource(user);
            updatedUser._id = identity.currentUser._id;
            updatedUser.$update().then(function(){
                identity.currentUser.firstName = updatedUser.firstName;
                identity.currentUser.lastName = updatedUser.lastName;
                deferred.resolve(true);
            }, function(success){
                deferred.reject(success);
            })

            return deferred.promise;
        },
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
        isAuthenticated: function(){
            if(identity.isAuthenticated()){
                return true;
            }else{
                return $q.reject('not authorized');
            }
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