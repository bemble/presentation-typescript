/// <reference path="../references/angularjs/angular.d.ts" />

class Model {
    foo:string = '';
}

class ModelFactory {
    create():Model {
        return new Model();
    }
}

var app:ng.IModule = angular.module('demoApp');
/**
 * Renommez celle voulue en "modelFactory"
 * @see https://docs.angularjs.org/guide/providers
 * @see http://www.frangular.com/2012/12/differentes-facons-de-creer-un-service-angularjs.html
 */
// value attend directement l'instance à renvoyer
app.value('modelFactory', new ModelFactory());

// factory appelle une fonction qui doit retourner l'instance du service
app.factory('modelFactory-factory', () => {
    return new ModelFactory();
});

// service va retourner une nouvelle instance de la fonction passée en paramètre
app.service('modelFactory-service', ModelFactory);

// provider attend fonction dont l'instance retournera le service voulu via la fonction $get
class ModelFactoryProvider implements ng.IServiceProvider {
    $get():ModelFactory {
        return new ModelFactory();
    }
}
app.provider('modelFactory-provider', ModelFactoryProvider);