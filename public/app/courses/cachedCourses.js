App.factory('CachedCourses', function(courseResource){
    var cachedCourses;
    return{
        query: function(){
            if(!cachedCourses){
                cachedCourses = courseResource.query();
                return cachedCourses;
            }else{
                return cachedCourses;
            }
        }
    }
});