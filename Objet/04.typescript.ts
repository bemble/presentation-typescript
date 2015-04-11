class Personne {
    public prenom:string = null;
    public dateNaissance:Date = null;

    private estAnniversaire() {
        if (this.dateNaissance === null) {
            return false;
        }
        var today = new Date();
        return this.dateNaissance.getMonth() === today.getMonth() && this.dateNaissance.getDate() === today.getDate();
    }

    private souhaiteAnniversaire() {
        console.log('Joyeux ' + (this.estAnniversaire() ? '' : 'non-') + 'anniversaire ' + this.prenom + '  \\°/ !');
    }

    public surprise() {
        setTimeout(() => {
            // typescript va gérer tout seul le this grâce à la closure
            this.souhaiteAnniversaire();
        }, 100);
    }
}

var personne:Personne = new Personne();
personne.prenom = 'Pierre';
personne.dateNaissance = new Date(1987, 5, 1, 0, 0, 0);
personne.surprise();

// Reflection sur le classe :
console.log(Object.keys(personne));