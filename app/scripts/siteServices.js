var services=angular.module("siteServices",["ngResource"])
var APIROOT="http://127.0.0.1:8080/api"
services.factory('Page',function(){
    var title="David vanMaanen HomePage";
    return{
	title: function(){return title;},
	setTitle: function(newTitle){title=newTitle}
    }
});
services.factory('Blog',function($resource){
    var subroot=APIROOT+"/blog/";
    return {posts: $resource(subroot+'posts/:id'),
	    tags: $resource(subroot+'tags/:id'),
	    categories: $resource(subroot+'categories/:id'),
	    comments: $resource(subroot+'comments/:id'),
	    image: $resource(subroot+'image/:id')};
});
services.factory('Resume',function($resource){
    var subroot=APIROOT+"/resume/";
    return {experience: $resource(subroot+'experience/:id'),
	    skills: $resource(subroot+'skills/:id'),
	    skill_levels: $resource(subroot+'skill_levels/:id'),
	    exp_cats: $resource(subroot+'exp_cats/:id'),
	    education: $resource(subroot+'education/:id'),
	    courses: $resource(subroot+'courses/:id')};
});


services.factory('Projects',function($resource){
    var subroot=APIROOT+"/projects/";
    return {projects: $resource(subroot+'projects/:id'),
	    tags: $resource(subroot+'tags/:id'),
	    links: $resource(subroot+'links/:id'),
	    screens: $resource(subroot+'screens/:id')};
});
services.factory('Misc',function($resource){
    var subroot=APIROOT+"/misc/";
    return {images: $resource(subroot+'images/:id'),
	    text: $resource(subroot+'text/:id'),
	    categories: $resource(subroot+'catgegories/:id')};
});
   
    
