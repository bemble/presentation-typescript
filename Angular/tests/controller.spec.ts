/// <reference path="../references/tsd.d.ts" />

describe('tests sur le controller', () => {
    var $controller:any;
    var $scope:angular.IScope;

    // On pourrait tester directement la classe DemoController, mais avec les injections celà devient plus compliqué
    var controller:any;

    // Application
    beforeEach(() => {
        module('demoApp');
    });

    // Injections
    beforeEach(() => {
        inject(($injector) => {
            $controller = $injector.get('$controller');

            var $rootScope:angular.IRootScopeService = $injector.get('$rootScope');
            $scope = $rootScope.$new();
        });
    });

    // Controller
    beforeEach(() => {
        controller = $controller('demoController', {
            $scope: $scope
        });
    });

    it('trouve le controller', () => {
        expect(controller).toBeDefined();
    });

    it('defini un model, de type Model, dans le controller', () => {
        expect(controller.model).toBeDefined();
        expect(controller.model).not.toBeNull();

        var className = controller.model.constructor.toString().match(/function (\w+)/)[1];
        expect(className).toEqual('Model');
    });

    it('appelle console.log avec \'lol\' lors de logLol', () => {
        spyOn(console, 'log');

        expect(controller.logLol).toBeDefined();
        controller.logLol();
        expect(console.log).toHaveBeenCalledWith('lol');
    });

    it('appelle logLol lors d\'un changement de valeur du model', () => {
        spyOn(controller, 'logLol');

        controller.model.foo = 'bar';
        $scope.$digest();
        expect(controller.logLol).toHaveBeenCalled();
    });
});