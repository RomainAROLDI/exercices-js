// Exercice 1 : Majorité
function estMajeur(ageMajorite = 18) {

    const anneeDeNaissance = parseInt(prompt("Entrez votre année de naissance : "));
    const currentYear = new Date().getFullYear();

    console.log(currentYear - anneeDeNaissance >= ageMajorite ? "Majeur" : "Mineur");
}

//estMajeur();


// Exercice 2 : Tarif Disneyland
function calculTarifDisneyland(tarif = 90) {

    const anneeDeNaissance = parseInt(prompt("Entrez votre année de naissance : "));
    const age = new Date().getFullYear() - anneeDeNaissance;

    if (age >= 70) {
        tarif *= 0.7;
    } else if (age <= 12) {
        tarif = 0;
    } else if (age <= 18) {
        tarif /= 2;
    }

    console.log(tarif);
}

//calculTarifDisneyland();


// Exercice 3 : Décompte
function decompte(nbSecondes = 3, messageDeFin = "Terminé !") {

    const interval = setInterval(() => {
        if (nbSecondes === 0) {
            clearInterval(interval);
            console.log(messageDeFin);
        } else {
            console.log(nbSecondes);
            nbSecondes--;
        }
    }, 1000);
}

//decompte(10, "Décollage !");


// Exercice 4 : Beau dessin
function dessiner(caractere = "*") {

    const nbEtages = parseInt(prompt("Entrez le nombre d'étages : "));

    for (let i = 1; i <= nbEtages; i++) {
        console.log(caractere.repeat(i));
    }
}

dessiner();


// Exercice 5 : Nombre premier
function estPremier(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let nbPremiers = 0;
let sommePremiers = 0;
let i = 2;
while (nbPremiers < 100) {
    if (estPremier(i)) {
        console.log(i);
        nbPremiers++;
        sommePremiers += i;
    }
    i++;
}

console.log("La somme des 100 premiers nombres premiers est : " + sommePremiers);


// Exercice 6 : Factorielle
function calculFactorielle() {

    let nb = parseInt(prompt("Entrez un nombre : "));
    let i = 1;
    let res = 1;

    while (i <= nb) {
        res *= i;
        i++;
    }

    console.log(res);
}

calculFactorielle();
