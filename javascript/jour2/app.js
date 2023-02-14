var note_maths = 15;
var note_francais = 12;
var note_histoire_geo = 9;
var moyenne = 0;

moyenne = (note_maths + note_francais + note_histoire_geo) / 3

console.log('La moyenne est de ' + moyenne + ' / 20.');

/* Déclarer une variable heure qui contient la valeur de type integer de votre choix comprise entre 0 et 24. Créer une condition qui affiche un message si l'heure est le matin, l'après-midi ou la nuit. */

let heure = 5;

if (heure < 0 || heure > 24) { console.log("Impossible") }
else if (heure >= 19 || heure <= 5) { console.log("nous sommes la nuit") }
else if (heure <= 12) { console.log("nous sommes le matin") }
else { console.log("nous sommes l'après-midi") }


let heure = "bonjour";

if (heure > 6 && heure < 12) {
    console.log("c'est le matin");
}
else if (heure > 12 && heure < 19) {
    console.log("c'est l'aprem ");
} else if ((heure >= 19 && heure <= 23) || (heure >= 0 && heure <= 6)) {
    console.log("c'est la nuit");
} else {
    console.log("veuillez entrer un nombre entre 0 et 24");
}

/* En utilisant la boucle for, afficher la table de multiplication du chiffre 5.
exemple affiche moi : "5x1 = 5", dans la console jusqu'a 10;
exemple
5x1=5
5x2=10
5x3=15 
Ect..*/

let a = 5;
for (i = 1; i <= 10; i++) {
    console.log(a + " * " + i + " = " + a * i)
}

/* faite moi une function qui va additionner 2 chiffre qu'on passera en paramètre quand on l'appel
exemple 
addition(5,6);
il doit alor m'afficher le résultat dans la console */

function addition(a, b) {
    return a + b;
}

console.log(addition(5, 6))

/*********************Objects *************************/

let data = {
    "prénom": "Benjamin",
    "âge": 32
}

console.log(data.prénom)