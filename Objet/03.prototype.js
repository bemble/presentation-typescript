function Personne() {
    this.prenom = null;
    this.dateNaissance = null;
};

/*
 * La notion de public/privé n'existe pas en JS, seules les closures cloisonnent les fonctions
 */
Personne.prototype.estAnniversaire = function () {
    if (this.dateNaissance === null) {
        return false;
    }
    var today = new Date();
    return this.dateNaissance.getMonth() === today.getMonth() && this.dateNaissance.getDate() === today.getDate();
};
Personne.prototype.souhaiteAnniversaire = function () {
    console.log('Joyeux ' + (this.estAnniversaire() ? '' : 'non-') + 'anniversaire ' + this.prenom + '  \\°/ !');
};
/*
 * Passer par le prototype précise que la fonction n'est pas
 */
Personne.prototype.surprise = function () {
    var _this = this;
    setTimeout(function () {
        // ici this n'est plus la personne courante mais le timeout
        _this.souhaiteAnniversaire();
    }, 100);
};

var personne = new Personne();
personne.prenom = 'Pierre';
personne.dateNaissance = new Date(1987, 5, 1, 0, 0, 0);
personne.surprise();

// Reflection sur le classe :
console.log(Object.keys(personne));
// -> Seuls les attributs de la classe personne apparaîssent