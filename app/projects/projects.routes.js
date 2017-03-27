(function(){
'use strict';
angular.module('testApp.projects')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'projects/projects.view.html'
        })
        .when('/About', {
            templateUrl: 'projects/about.view.html'
        })
        
    }])
})();