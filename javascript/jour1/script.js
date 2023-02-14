/**********************les variables ***********************************/

var numMonth = prompt("Quel numéro de mois sommes-nous ?");
if (numMonth > 6 && numMonth <= 12) {
    console.log("Deuxième semestre");
    alert("Deuxième semestre");
}
else if (numMonth >= 1 && numMonth <= 3) {
    console.log("Premier trimestre");
    alert("Premier trimestre");
}
else if (numMonth >= 4 && numMonth <= 6) {
    console.log("Deuxième trimestre");
    alert("Deuxième trimestre");
}
else if (numMonth == 0 || numMonth > 12) {
    console.log("erreur");
    alert("erreur");
}

/***********************les boucles ********************************/

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

i = 0
while (i <= 9) {
    i++;
    console.log(i);
}

var m = 12
function converterMinuteToSecond(m) {
    return m * 60
}
var second = converterMinuteToSecond(m)
console.log(second);

/*Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

Exemple:
getMax(5, 9, 1) ➞ 9

getMax(2, 3, 10) ➞ 10
  */

function getMax(a, b, c) {
    if (a > b && a > c) { return a }
    else if (b > a && b > c) { return b }
    else if (c > a && c > b) { return c }
    else if (a == b) { return a }
    else if (b == c) { return b }
}

console.log(getMax(1, 5, 5));
console.log(getMax(2, 3, 10));

/* fonction max la plus rapide */

function getMax(a, b, c) {
    let max = a
    if (max < b) { max = b }
    if (max < c) { max = c }
    return max
}
console.log(getMax(1, 5, 5));
console.log(getMax(2, 3, 10));

/*
Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. 
Sinon, retournez FALSE.

Exemple:
check(5, 20) ➞ true
// 5 + 20 = 25

check(60, 55) ➞ false
// 60 + 55 = 115
*/

function check(a, b) {
    return ((a + b) < 100)
}

console.log(check(5, 20));
console.log(check(60, 55));


/*
Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.

Exemple:
hmTos(1, 10) ➞ 4200

hmTos(0, 59) ➞ 3540

hmTos(0, 0) ➞ 0
*/


function hmTos(heure, minute) {
    return (heure * 3600 + minute * 60)
}

console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

/*
une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:

Une année doit être divisible par 400 ou divisible par 4 et non pas 100.

Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.

Exemple:

bissextile(2020) ➞ true
// Divisé par 4 et non par 100.

bissextile(1210) ➞ false


bissextile(2000) ➞ true
// Divisé par 400.

 */

function bissextile(year) {
    return (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
}

console.log(bissextile(2020));
console.log(bissextile(1210));
console.log(bissextile(2000));

/****************************les tableaux **************************************/

/*----------------------------------------------------------------------------------------------------------
Exercice 2:
Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.

Exemple:
find([2, 7, 1], 7) ➞ 1

find([6, 9, 5], 6) ➞ 0

find([6, 7, 8], 9) ➞ -1

*/
function find(tab, val) {
    {
        for (var i = 0; i < tab.length; i++)
            if (val == tab[i]) { return i }
    }
    return -1
}
console.log(find([2, 7, 1], 7))
console.log(find([6, 9, 5], 6))
console.log(find([6, 7, 8], 9))

/*******************************************************************************************
 Exercice 3:
Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.

Exemple:
nbrExist([6, 7, 8], 7) ➞ true

nbrExist([1, 2, 3], 5) ➞ false

nbrExist([], 0) ➞ false
*/

function nbrExist(tab, val) {
    {
        for (i = 0; i < tab.length; i++)
            if (val == tab[i]) { return true }
    }
    return false
}

console.log(nbrExist([6, 7, 8], 7))
console.log(nbrExist([1, 2, 3], 5))
console.log(nbrExist([], 0))

/****************************************************************************
 Exercice 4:
Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s »,
retournez TRUE, sinon retournez FALSE.

Exemple:

checkS("Thomas") ➞ true

checkS("Ali") ➞ false

checkS("Alex") ➞ false

checkS("Elvis") ➞ true
 */

function checkS(str) {
    return (str.endsWith("s"))
}


function checkS(str) {
    return (str[str.length - 1] == "s")
}

console.log(checkS("Thomas"))
console.log(checkS("Ali"))
console.log(checkS("Alex"))
console.log(checkS("Elvis"))

/***************************************************************************
 Exercice 5:
Créez une fonction qui renvoie TRUE si une chaîne contient un ou des espaces. Sinon renvoie FALSE.

Exemple:

containSpaces("Thomas") ➞ false

containSpaces("Hello World!") ➞ true

containSpaces(" ") ➞ true

containSpaces("") ➞ false
*/

function containSpaces(str) {

    for (i = 0; i < str.length; i++) {
        if (str[i] == " ") { return true }
    }
    return false
}

console.log(containSpaces("Thomas"))
console.log(containSpaces("Hello World!"))
console.log(containSpaces(" "))
console.log(containSpaces(""))


/****************************************************
 Exercice 7

Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre
 ou non.

Exemple:

checkOrder("abc") ➞ true

checkOrder("zyx") ➞ false

   ➞ true

checkOrder("aabbcc") ➞ true

checkOrder("aBcD")

 */

function checkOrder(str) {
    return str.toLowerCase() === str.toLowerCase().split("").sort().join("")
}

console.log(checkOrder("abc"))

console.log(checkOrder("zyx"))

console.log(checkOrder("aabbcc"))

console.log(checkOrder("aBcD"))


/********************************************************
 * Exercice 8
 * 
 Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.

Exemple:

addEnd(["accept", "achet", "adapt"], "able") ➞ ["acceptable", "achetable", "adaptable"]

addEnd(["aim", "act", "ard"], "ant") ➞ ["aimant", "actant", "ardant"]
*/

function addEnd(tableau, fin) {
    for (i = 0; i <= tableau.length; i++) {
        return tableau.map(x => x + fin)
    }
}

console.log(addEnd(["accept", "achet", "adapt"], "able"))
console.log(addEnd(["aim", "act", "ard"], "ant"))


/*******************************************************************
 Exercice 9
* Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.

Exemple:

checkIntOrStr("WayToLearnX") ➞ "string"

checkIntOrStr(1) ➞ "int"

checkIntOrStr("250") ➞ "string"
 *
 */

function checkIntOrStr(x) {
    if (Number.isInteger(x) == true) { return "int" }
    else { return "string" }
}

console.log(checkIntOrStr("WayToLearnX"))
console.log(checkIntOrStr(1))
console.log(checkIntOrStr("250"))

/********************************************************************
 
Exercice 10
Créez une fonction qui prend une phrase et renvoie le nombre de mots.

Exemple:

count("Welcome to WWM) ➞ 3

count("Hello World") ➞ 2

count("I am going to my school") ➞ 6
*/
function count(str) {
    return str.split(" ").length
}

console.log(count("Welcome to WWM"))
console.log(count("Hello World"))
console.log(count("I am going to my school"))

/******************************************************************
 Exercice 11

Créez une fonction récursive qui renvoie le total de tous les nombres impairs jusqu’à n(inclus). 
n sera donné comme un nombre impair.
 Récursive = qui s'appelle elle même.
Exemple:

sommeImpair(3) ➞ 4
// 1 + 3 = 4

sommeImpair(7) ➞ 16

sommeImpair(59) ➞ 900
*/

function sommeImpair(n) {
    let tableau = []
    for (i = 1; i <= n; (i++)) {
        if (i % 2 != 0) { tableau.push(i) }
    }
    const initialValue = 0
    return tableau.reduce((a, c) => a + c, initialValue)
}



/*************************************************************************
 Exercice 12
 
Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient
  que des lettres majuscules ou minuscules.
 
  Exemple:
 
isSameCase("GérardTourres") ➞ false
 
isSameCase("gerard") ➞ true
 
isSameCase("TOURRES") ➞ true
*/

function isSameCase(str) {

    return (str === str.toLowerCase() || str === str.toUpperCase())

}

console.log(isSameCase("GérardTourres"))
console.log(isSameCase("gerard"))
console.log(isSameCase("TOURRES"))


/****************************************************************************
 Exercice 13
 
Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:
 
Une année doit être divisible par 400 ou divisible par 4 et non pas 100.
 
Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.
 
Exemple:
 
bissextile(2020) ➞ true
// Divisé par 4 et non par 100.
 
bissextile(1210) ➞ false
 
 
bissextile(2000) ➞ true
// Divisé par 400.
 */

function bissextile(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/********************************************* Excercice 14
Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();
 
Exemple:
reverseTab([1, 2, 3]) ➞ [3, 2, 1]
 
reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]
*/

function reverseTab(tab) {
    let d;
    let tab2 = [];
    for (i = tab.length; i > 0; i -= 1) {
        d = tab.pop();
        tab2.push(d);
    }
    return tab2
}

console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));


/*******************************************Excercice 18
Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
 
Exemple:
getLastElem([1, 2, 3, 4]) ➞ 4
 
getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’
 
 
*/

function getLastElem(tab) {
    return tab.pop()
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

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