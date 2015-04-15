var siteControllers= angular.module('siteControllers',[])
siteControllers.controller('MainCtrl',['$scope','Page',function($scope,Page){
    $scope.Page=Page
}]);
siteControllers.controller('HomeCtrl',['$scope','$http','Page','Blog','Misc',function($scope,$http,Page,Blog,Misc){
    Page.setTitle("Home");
    console.log("home");
    $scope.recent_posts=Blog.posts.get();
    console.log($scope.recent_posts)
    
}]);
siteControllers.controller('BlogCtrl',['$scope','$routeParams','Page','Blog',function($scope,$routeParams,Page, Blog){

    $scope.blogId=$routeParams.blogId
    Page.setTitle("Blog "+$scope.blogId);
    console.log("blog");
    console.log($routeParams.blogId);
    $scope.post=Blog.posts.get({id: $routeParams.blogId},function(){
	console.log($scope.post);
	$scope.created=new Date($scope.post.created).toString();
	console.log(new Date($scope.post.created).toString());
    });
    
    
}]);
siteControllers.controller('BlogListCtrl',['$scope','$http','Page','Blog','$routeParams',function($scope,$http,Page, Blog,$routeParams){
    Page.setTitle("Blog");
    console.log("blog");
    $scope.nextpage=null;
    $scope.previouspage=null;
    if($routeParams.page){
	params={page:$routeParams.page};
    }
    else{
	params={}
    }
    $scope.posts=Blog.posts.get(params,function(){
	console.log($scope.posts);   
	if($scope.posts.next){
	    console.log($scope.posts.next.split("?"));
	    qparams=$scope.posts.next.split("?")[1].split("&");
	    for(i=0; i<qparams.length; i++){
		spp=qparams[i].split("=");
		if(spp[0]=="page"){
		    $scope.nextpage="#/blog/?page="+spp[1]
		}
	    }
	}
	if($scope.posts.previous){
	    if(qparams=$scope.posts.previous.split("?")[1]){
		qparams=$scope.posts.previous.split("?")[1].split("&");
		for(i=0; i<qparams.length; i++){
		    spp=qparams[i].split("=");
		    if(spp[0]=="page"){
			$scope.previouspage="#/blog/?page="+spp[1]
		    }
		}
	    }
	    else{
		$scope.previouspage="#/blog/"
	    }
	}
	console.log($scope.previouspage);
	console.log($scope.nextpage);
    });
    console.log($scope.posts)
    
}]);
siteControllers.controller('ResumeCtrl',['$scope','$http','Page',function($scope,$http,Page){
    Page.setTitle("Resume");
    console.log("resume");
}]);
siteControllers.controller('ProjectsCtrl',['$scope','$http','Page',function($scope,$http,Page){
    Page.setTitle("Projects");
    console.log("projects");
}]);
