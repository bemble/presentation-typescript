function Personne() {
    this.prenom = null;
    this.dateNaissance = null;

    var that = this;

    function estAnniversaire() {
        if (that.dateNaissance === null) {
            return false;
        }
        var today = new Date();
        return that.dateNaissance.getMonth() === today.getMonth() && that.dateNaissance.getDate() === today.getDate();
    };

    function souhaiteAnniversaire() {
        console.log('Joyeux ' + (estAnniversaire() ? '' : 'non-') + 'anniversaire ' + that.prenom + ' \\°/ !');
    };

    this.surprise = function () {
        setTimeout(souhaiteAnniversaire, 100);
    };
};

var personne = new Personne();
personne.prenom = 'Pierre';
personne.dateNaissance = new Date(1987, 5, 1, 0, 0, 0);
personne.surprise();

// Comment je peux en créer un deuxième ?
// Reflection sur le classe :
console.log(Object.keys(personne));
// -> Les fonctions apparaîssent dans les clés

// Problème de référence vu en 01 :
function Personnalite() {
    this.donneHumeur = function () {
        return 'jovial';
    };
};

function PersonneAvecPersonnalite() {
    this.prenom = null;
    this.personnalite = new Personnalite();

    this.personnalite.donneHumeur = function () {
        return this.prenom === 'Hulk' ? 'grognon' : 'jovial';
    };
};


var pierre = new PersonneAvecPersonnalite();
pierre.prenom = 'Pierre';
var hulk = new PersonneAvecPersonnalite();
hulk.prenom = 'Hulk';
// Là plus de soucis, jovial !
console.log(pierre.personnalite.donneHumeur());