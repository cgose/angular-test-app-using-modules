angular.module('testApp.samples').config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/samples',{
            templateUrl: 'samples/samples.view.html',
            controller: 'SamplesCtrl',
            controllerAs: 'vm'
        })
}])