var siteControllers= angular.module('siteControllers',['ProjectsMod','ResumeMod',
						       'BlogMod']);
var HomeStateParams= {
    url:'/',
    resolve:{
	Posts:function(Blog){
	    return Blog.posts.get().$promise;
	},
	Welcome:function(Misc){
	    return Misc.text.get({category__name:"welcome-message"}).$promise;
	}	
    },
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl',
    data:{
	title:'Home',
    },
};
siteControllers.controller('MainCtrl',['$scope',function($scope){
    console.log("main- ");
    console.log($scope.$state);
}]);
siteControllers.controller('HomeCtrl',function($scope,Posts,Welcome){
    console.log("home- ");
    console.log($scope.$state.$current.data.title);
    $scope.recent_posts=Posts.results;
    $scope.welcome={title: Welcome.results[0].name,
		    message: Welcome.results[0].body};
    console.log($scope.recent_posts);
    
});
