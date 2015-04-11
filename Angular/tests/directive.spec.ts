/// <reference path="../references/tsd.d.ts" />

describe('tests de directive', () => {

    var template:string = '<demo-app-directive />';
    var $compile:any, $scope:any, $parentScope:any;
    var element:any;

    // Application
    beforeEach(() => {
        module('demoApp');
    });

    // Injections
    beforeEach(() => {
        inject(($injector) => {
            $compile = $injector.get('$compile');
            var $rootScope:angular.IRootScopeService = $injector.get('$rootScope');
            $parentScope = $rootScope.$new();
        });
    });

    // Directive
    beforeEach(() => {
        element = $compile(template)($parentScope);
        $parentScope.$digest();
        $scope = element.scope();
    });

    it('remplace la balise', () => {
        expect(element.prop('tagName')).not.toEqual('DEMO-APP-DIRECTIVE');
    });

    it('ajoute la variable chaine dans le scope', () => {
        expect($scope.chaine).toBeDefined();
    });
});