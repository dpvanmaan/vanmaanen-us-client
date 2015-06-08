var ResumeStateParams= {
    abstract: true,
    url:'/resume',
    templateUrl: 'views/resume.html',
    data:{
	title:'Resume'
    },
};
var ResumeExpStateParams={
    url:'/exp',
    resolve:{
	Exp: function(Resume){
	    var exp=Resume.exp_cats.get('');
	    return exp.$promise
	}
    },
    templateUrl: 'views/resume-exp.html',
    controller: function($scope,Exp){
	console.log(Exp);
	for (var i=0; i< Exp.results.length; i++){
	    var tp=Exp.results[i];
	    for (var j=0; j<tp.jobs.length; j++){
		tp.jobs[j].start=moment(tp.jobs[j].start).format('MMMM YYYY');
		tp.jobs[j].end=new moment(tp.jobs[j].end).format('MMMM YYYY');
		console.log(tp.jobs[j].start);
	    }
	}
	$scope.data=Exp.results;
    },
};
var ResumeSkillsStateParams={
    url:'/skills',
    resolve:{
	Skills: function(Resume){
	    return Resume.skill_levels.get().$promise;
	}
    },
    templateUrl: 'views/resume-skills.html',
    controller: 'ResumeCtrlSkills',
};
var ResumeEduStateParams={
    url:'/edu',
    resolve:{
	Edu: function(Resume){
	    return Resume.education.get().$promise;
	},
	Courses: function(Resume){
	    return Resume.courses.get().$promise;
	}
    },
    templateUrl: 'views/resume-edu.html',
    controller: 'ResumeCtrlEdu',
};
var ResumeAboutStateParams={
    url:'/about',
    resolve:{
	About: function(Resume){
	    return Misc.text.get({category__name:"about-me"}).$promise;
	}
    },
    templateUrl: 'views/resume-about.html',
    controller: 'ResumeCtrlAbout',
};

var ResumeMod= angular.module('ResumeMod',[]);
ResumeMod.controller('ResumeCtrlSkills',function($scope,Skills){
    console.log(Skills);
    $scope.skills=Skills.results;
});
ResumeMod.controller('ResumeCtrlEdu',function($scope,Edu,Courses){
    console.log(Edu);
    $scope.education=Edu.results;
    $scope.courses=Courses.results;
});
ResumeMod.controller('ResumeCtrlAbout',function($scope,About){
    $scope.about={tilte: About.results[0].name, message: About.results[0].body}
    
});
