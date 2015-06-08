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
	    state('home',HomeStateParams).
	    state('blog',BlogStateParams).
	    state('blog.list',BlogListStateParams).
	    state('blog.detail',BlogDetailStateParams).
	    state('resume',ResumeStateParams).
	    state('resume.exp',ResumeExpStateParams).
	    state('resume.skills',ResumeSkillsStateParams).
	    state('resume.education',ResumeEduStateParams).
	    state('resume.about',ResumeAboutStateParams).	    
	    state('projects',ProjectsStateParams);
    }]);
    
				   
