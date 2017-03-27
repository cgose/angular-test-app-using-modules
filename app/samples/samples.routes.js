(function(){
'use strict'
angular.module('testApp.samples').config(config)
    config.$inject = ['$routeProvider'];
    function config($routeProvider){        
        $routeProvider
            .when('/samples',{
                templateUrl: 'samples/samples.view.html',
                controller: 'SamplesCtrl',
                controllerAs: 'vm'
            })
}
})();