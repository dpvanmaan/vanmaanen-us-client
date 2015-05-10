'use strict';

var personalSite = angular.module('personalSite',[
    'ui.router',
    'siteControllers',
    'siteServices'

]);
personalSite.run([
    '$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
    }
]);
    
    
personalSite.config([
    '$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.
	    when('/resume','/resume/about').
	    otherwise('/');
	$stateProvider.
	    state('home',{
		url:'/',
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl',
		data:{
		    title:'Home',
		},
	    }).
	    state('blog',{
		abstract: true,
		url:'/blog/',
		templateUrl: 'views/blog.html',
		controller: 'BlogListCtrl',
		data:{
		    title:'Blog',
		},
	    }).
	    state('blog.list',{
		url:'',
		templateUrl: 'views/blog-list.html',
		controller: 'BlogListCtrl'
	    }).
	    state('blog.detail',{
		url:'/:blogId',
		templateUrl: 'views/blog-detail.html',
		controller: 'BlogCtrl'
	    }).
	    state('resume',{
		url:'/resume',
		templateUrl: 'views/resume.html',

		data:{
		    title:'Resume'
		},
	    }).
	    state('resume.exp',{
		url:'/exp',
		resolve:{
		    ResolveData: function(Resume){
			var exp=Resume.exp_cats.get('', function(){
			    for (var i=0; i< exp.results.length; i++){
				var tp=exp.results[i];
				for (var j=0; j<tp.jobs.length; j++){
				    tp.jobs[j].start=moment(tp.jobs[j].start).format('MMMM YYYY');
				    tp.jobs[j].end=new moment(tp.jobs[j].end).format('MMMM YYYY');
				    console.log(tp.jobs[j].start);
				}
			    }


			});
			return exp

		    }
		},
		templateUrl: 'views/resume-exp.html',
		controller: function($scope,ResolveData){
		    console.log(ResolveData);
		    $scope.data=ResolveData;
		},
	    }).
	    state('resume.skills',{
		url:'/skills',
		resolve:{
		    ResolveData: function(Resume){
			return Resume.skill_levels.get()
		    }
		},
		templateUrl: 'views/resume-skills.html',
		controller: 'ResumeCtrl',
	    }).
	    state('resume.education',{
		url:'/edu',
		resolve:{
		    ResolveData: function(Resume){
			return {edu: Resume.education.get(),
			       courses: Resume.courses.get()}
		    }
		},
		templateUrl: 'views/resume-edu.html',
		controller: 'ResumeCtrl',
	    }).
	    state('resume.about',{
		url:'/about',
		resolve:{
		    ResolveData: function(Resume){
			return {about:"About"}
		    }
		},
		templateUrl: 'views/resume-about.html',
		controller: 'ResumeCtrl',
	    }).	    
	    state('projects',{
		url:'/projects',
		resolve:{
		    projects: function(Projects){
			return Projects.projects.get().$promise;			       
		    }	    
		},
		controller: 'ProjectsCtrl',
		data:{
		    title:'Projects'
		},
		templateUrl: 'views/projects.html',
	    });
    }]);
    
				   
