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
		controller: 'ResumeCtrl',
		data:{
		    title:'Resume'
		},
	    }).
	    state('resume.exp',{
		url:'/exp',
		templateUrl: 'views/resume-exp.html',
	    }).
	    state('resume.skills',{
		url:'/skills',
		templateUrl: 'views/resume-skills.html',

	    }).
	    state('resume.education',{
		url:'/edu',
		templateUrl: 'views/resume-edu.html',
	    }).
	    state('resume.about',{
		url:'/about',
		templateUrl: 'views/resume-about.html',
	    }).	    
	    state('projects',{
		url:'/projects',
		templateUrl: 'views/projects.html',
		controller: 'ProjectsCtrl',
		data:{
		    title:'Projects'
		}
	    })
    }]);
    
				   
