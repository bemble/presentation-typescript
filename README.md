# Illustrations et exemples pour la présentation Typescript
 
Le dossier Objet contient les illustrations concernant la motivation derrière Typescript.
Le dossier Angular permet montre un exemple simple d'utilisation de Typescript avec AngularJS.

## Installation typescript

Une fois node installé et fonctionnel :

    npm install -g typescript
    
Typescript est installé en global sur la machine.

## Illustrations "Objet"
    
Pour compiler le fichier Typescript :

    tsc --sourceMap Objet/04.typescript.ts

Les fichiers js et js.map seront générés.
Pour exécuter les exemples en JS :

    node Objet/script.js

## Exemples "Angular"

Commencer par installer les dépendences (si besoin, une fois node configuré avec le proxy et l'image de PhantomJS téléchargée) :

    cd Angular/ && npm install
    
Pour lancer les tests :

    cd Angular/ && npm test
    