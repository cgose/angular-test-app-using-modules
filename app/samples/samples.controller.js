angular.module('testApp.samples')
    .controller('SamplesCtrl', SamplesCtrl);

    function SamplesCtrl(){
        var vm = this;
        vm.samples = [];
        vm.addSample = addSample;

        function addSample(sample){
            vm.samples.push(sample);
        }
    }