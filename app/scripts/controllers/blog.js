var BlogMod= angular.module('BlogMod',[])
BlogStateParams={
    abstract: true,
    url:'/blog/',
    templateUrl: 'views/blog.html',
    resolve:{
	Categories:function(Blog){
	    return Blog.categories.get().$promise;
	},
	
	Tags:function(Blog){
	    return Blog.tags.get().$promise;
	},
    },
    controller: 'BlogCtrl',
    data:{
	title:'Blog',
    },
};
BlogListStateParams={
    url:'',
    parent:'blog',
    resolve:{
	Posts: function($stateParams,Blog){
	    console.log($stateParams);
	    var params;
	    if($stateParams.page){
		console.log("in if");
		params={page:$stateParams.page};
	    }
	    else{
		console.log("in else");
		params={};
	    }
	    console.log("after if");
	    return Blog.posts.get(params).$promise;
	},
    },
    templateUrl: 'views/blog-list.html',
    controller: 'BlogListCtrl'
};
BlogDetailStateParams={
    url:':blogId',
    parent:'blog',
    templateUrl: 'views/blog-detail.html',
    controller: 'BlogDetailCtrl'
};

BlogMod.controller('BlogCtrl',function($scope,$stateParams,Tags,
				       Categories){

    $scope.tags=Tags.results;
    $scope.cats=Categories.results;
  
});

BlogMod.controller('BlogDetailCtrl',function($scope,$stateParams,Blog){
    $scope.blogId=$stateParams.blogId
    console.log("blog");
    console.log($stateParams.blogId);
    $scope.post=Blog.posts.get({id: $stateParams.blogId},function(){
	console.log($scope.post);
	$scope.created=new Date($scope.post.created).toString();
	console.log(new Date($scope.post.created).toString());
    });
  
});
BlogMod.controller('BlogListCtrl',function($scope,$stateParams, Posts){
    console.log("blog");
    $scope.nextpage=null;
    $scope.previouspage=null;
    $scope.posts=Posts.results;
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
