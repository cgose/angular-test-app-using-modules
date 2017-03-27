(function(){
'use strict';
angular.module('testApp.projects')
    .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'projects/projects.view.html'
        })
        .when('/About', {
            templateUrl: 'projects/about.view.html'
        })
        
    }
})();