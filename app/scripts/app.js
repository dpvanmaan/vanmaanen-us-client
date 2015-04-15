'use strict';

var personalSite = angular.module('personalSite',[
    'ngRoute',
    'siteControllers',
    'siteServices'

]);

personalSite.config([
    '$routeProvider',
    function($routeProvider) {
	$routeProvider.
	    when('/home',{
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	    }).
	    when('/blog',{
		templateUrl: 'views/blogList.html',
		controller: 'BlogListCtrl'
	    }).
	    when('/blog/:blogId',{
		templateUrl: 'views/blog.html',
		controller: 'BlogCtrl'
	    }).
	    when('/resume',{
		templateUrl: 'views/resume.html',
		controller: 'ResumeCtrl'
	    }).
	    when('/projects',{
		templateUrl: 'views/projects.html',
		controller: 'ProjectsCtrl'
	    }).
	    otherwise({
		redirectTo: '/home'
	    })
    }]);
    
				   
