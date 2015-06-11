var ResumeStateParams= {
    url:'/resume',
    resolve:{
	PrintResume: function(Misc){
	    var prom=Misc.files.get({category__name:"print-resume"}).$promise;
	    console.log(prom);
	    return prom;
	}
    },
    templateUrl: 'views/resume.html',
    controller: 'ResumeCtrlMain',
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
    controller: 'ResumeCtrlExp',
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
	}
    },
    templateUrl: 'views/resume-edu.html',
    controller: 'ResumeCtrlEdu',
};
var ResumeAboutStateParams={
    url:'/about',
    resolve:{
	About: function(Misc){
	    var prom=Misc.text.get({category__name:"about-me"}).$promise;
	    console.log(prom);
	    return prom;
	}
    },
    templateUrl: 'views/resume-about.html',
    controller: 'ResumeCtrlAbout',
};

var ResumeMod= angular.module('ResumeMod',[]);
ResumeMod.controller('ResumeCtrlExp', function($scope,Exp){
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
});
ResumeMod.controller('ResumeCtrlSkills',function($scope,Skills){
    console.log(Skills);
    $scope.skills=Skills.results;
});
ResumeMod.controller('ResumeCtrlEdu',function($scope,Edu){
    console.log(Edu);
    $scope.education=Edu.results;

});
ResumeMod.controller('ResumeCtrlMain',function($scope,PrintResume){

    $scope.resume_url=PrintResume.results[0].filename;
    
    console.log($scope.resume_url)

});
ResumeMod.controller('ResumeCtrlAbout',function($scope,$sce,About){
    console.log(About);
    $scope.about={title: About.results[0].name,type: About.results[0].text_type};
    if ($scope.about.type=='htm'){
	$scope.about.message=$sce.trustAsHtml(About.results[0].body);
    }
    else{
	$scope.about.message=About.results[0].body;
    }
    console.log($scope.about.html);
});
