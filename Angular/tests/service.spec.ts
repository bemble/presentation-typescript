/// <reference path="../references/tsd.d.ts" />
/// <reference path="../app/service.ts" />

describe('tests sur le service', () => {
    var service:any;

    // Application
    beforeEach(() => {
        module('demoApp');
    });

    // Injections
    beforeEach(() => {
        inject(($injector) => {
            service = $injector.get('modelFactory');
        });
    });

    it('trouve le service', () => {
        expect(service).toBeDefined();
    });

    it('peut créer un nouveau model', () => {
        expect(service.create).toBeDefined();

        var model:Model = service.create();
        expect(model).toBeDefined();
        // Le seul intérêt de déclarer model comme étant de type Model et non any est
        // d'avoir l'autocomplétion suivante (mais il faut ajouter la référence) :
        expect(model.foo).toBeDefined();
    });
});