/// <reference path="../references/angularjs/angular.d.ts" />

class DemoDirective implements ng.IDirective {
    replace:boolean = true;
    restrict:string = 'E';

    template:string = '<div>{{ chaine }}</div>';
    controller:any = DemoDirectiveController;
}

class DemoDirectiveController {
    static $inject:string[] = ['$scope'];

    constructor($scope) {
        $scope.chaine = 'lol';
    }
}

var app:ng.IModule = angular.module('demoApp');
app.directive('demoAppDirective', () => {
    return new DemoDirective();
});