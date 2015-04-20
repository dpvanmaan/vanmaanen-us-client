var siteControllers= angular.module('siteControllers',[])
siteControllers.controller('MainCtrl',['$scope',function($scope){
    console.log("main- ");
    console.log($scope.$state);
}]);
siteControllers.controller('HomeCtrl',['$scope','Blog','Misc',function($scope,Blog,Misc){
    console.log("home- ");
    console.log($scope.$state.$current.data.title);
    $scope.recent_posts=Blog.posts.get();
    console.log($scope.recent_posts);
    
}]);
siteControllers.controller('BlogCtrl',['$scope','$stateParams','Blog',function($scope,$stateParams,Blog){
    $scope.blogId=$stateParams.blogId
    console.log("blog");
    console.log($stateParams.blogId);
    $scope.post=Blog.posts.get({id: $stateParams.blogId},function(){
	console.log($scope.post);
	$scope.created=new Date($scope.post.created).toString();
	console.log(new Date($scope.post.created).toString());
    });
    
    
}]);
siteControllers.controller('BlogListCtrl',['$scope','Blog','$stateParams',function($scope,Blog,$stateParams){
    console.log("blog");
    $scope.nextpage=null;
    $scope.previouspage=null;
    if($stateParams.page){
	params={page:$stateParams.page};
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
siteControllers.controller('ResumeCtrl',['$scope',function($scope){
    console.log("resume");
}]);
siteControllers.controller('ProjectsCtrl',['$scope',function($scope){
    console.log("projects");
}]);
