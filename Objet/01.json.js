function estAnniversaire() {
    if (this.dateNaissance === null) {
        return false;
    }
    var today = new Date();
    return this.dateNaissance.getMonth() === today.getMonth() && this.dateNaissance.getDate() === today.getDate();
};

function souhaiteAnniversaire() {
    console.log('Joyeux ' + (estAnniversaire.apply(this) ? '' : 'non-') + 'anniversaire ' + this.prenom + ' \\°/ !');
};

var personne = {
    prenom: null,
    dateNaissance: null,
    surprise: function () {
        var _this = this;
        setTimeout(function () {
            // ici this n'est plus la personne courante mais le timeout
            souhaiteAnniversaire.apply(_this);
        }, 100);
    }
};

personne.prenom = 'Pierre';
personne.dateNaissance = new Date(1987, 5, 1, 0, 0, 0);
personne.surprise();

// Comment je peux en créer un deuxième ? angular.copy/angular.extend/factory...?
// Reflection sur le classe :
console.log(Object.keys(personne));
// -> Les fonctions apparaîssent dans les clés
// Cette création est à proscrire s'il faut créer d'autres instances
// Réfléchir à 2 fois s'il doit y avoir des fonctions, et beaucoup
// Cas idéal d'utilisation : paramétrage, échange de données

// On utilise beaucoup cette modélisation avec Angular car beaucoup de singletons
// -> attention quand on a pas de singleton... :
var personneFactory = {
    create: function () {
        var personne = {
            prenom: null,
            dateNaissance: null,
            personnalite: this.personnalite
        };
        personne.personnalite.donneHumeur = function () {
            return personne.prenom === 'Hulk' ? 'grognon' : 'jovial';
        };
        return personne;
    },
    personnalite: {
        donneHumeur: function () {
            return 'jovial';
        }
    }
};

var pierre = personneFactory.create();
pierre.prenom = 'Pierre';
var hulk = personneFactory.create();
hulk.prenom = 'Hulk';
// En théorie devrait répondre 'jovial'
console.log(pierre.personnalite.donneHumeur());
// Mais vu qu'en ligne 44 on passe à l'objet personne la référence à l'objet personnalite de personneFactory,
// quand ligne 46 on change la fonction en utilisant la variable "personne", la fonction utilise la dernière
// "personne" créée