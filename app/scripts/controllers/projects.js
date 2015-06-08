var ProjectsStateParams= {
    url:'/projects',
    resolve:{
	projects: function(Projects){
	    return Projects.projects.get().$promise;
	}	    
    },
    templateUrl: 'views/projects.html',
    controller: 'ProjectsCtrl',
    data:{
	title:'Projects'
    },
   
};
var ProjectsMod=angular.module('ProjectsMod',[]);
ProjectsMod.controller('ProjectsCtrl',function($scope, projects){
    console.log(projects);
    $scope.projects=projects.results;
    console.log($scope.projects);
});
