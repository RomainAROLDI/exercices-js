// Exercice 1 : calcul simple
function calculSimple() {

    const num1 = parseInt(prompt("Entrez un premier nombre : "));
    const num2 = parseInt(prompt("Entrez un deuxième nombre : "));
    let divisionMessage;

    if (num2 === 0) {
        divisionMessage = "Impossible de diviser par 0.";
    } else {
        divisionMessage = "Le résultat de la division est : " + (num1 / num2);
    }

    console.log(
        "Le résultat de l'addition est : " + (num1 + num2) + "\n" +
        "Le résultat de la soustraction est : " + (num1 - num2) + "\n" +
        "Le résultat de la multiplication est : " + (num1 * num2) + "\n" +
        divisionMessage + "\n"
    );
}

//calculSimple();


// Exercice 2 : prix final
function calculPrixTTC(montantTaxe = 20, fraisDePort = 0) {

    const prixHT = parseFloat(prompt("Entrez un prix HT : "));

    console.log("Prix TTC (FDP inclus) : " + (prixHT * (1 + (montantTaxe / 100)) + fraisDePort).toFixed(2));
}

//calculPrixTTC(19.6, 5);


// Exercice 3 : température
function celsiusToFahrenheit() {

    const degresCelsius = parseFloat(prompt("Entrez une température en °C : "));

    console.log("Température : " + (degresCelsius * 9 / 5 + 32).toFixed(2) + "°F");
}

//celsiusToFahrenheit();


// Exercice 4 : IMC / POIDS
function calculIMC() {

    const poids = parseFloat(prompt("Entrez votre poids en kg : "));
    const taille = parseFloat(prompt("Entrez votre taille en m : "));

    console.log("IMC : " + (poids / (taille * taille)).toFixed(2));
}

//calculIMC();


// Exercice 5 : permutation de valeur
function permuterValeur(nb1 = 5, nb2 = 3) {

    const tmp = nb1;
    nb1 = nb2;
    nb2 = tmp;

    console.log("nb1 = " + nb1 + "\nnb2 = " + nb2);
}

//permuterValeur();


// Exercice 6 : la voiture
const voiture = {
    marque: "Volkswagen",
    modele: "Polo IV",
    hasABS: true,
    finition: {
        couleur: "Noir",
        option: "",
        chromes: ["Rétroviseurs", "Poignées portières"]
    },
    kilometrage: 220000
}

console.log(
    "--- Voiture " + voiture.marque + " " + voiture.modele + " ---\n" +
    "Couleur de finition : " + voiture.finition.couleur + "\n" +
    "Kilométrage : " + voiture.kilometrage.toString() + "kms\n" +
    "ABS : " + (voiture.hasABS ? "Oui" : "Non") + "\n" +
    "Seconde option chromée : " + voiture.finition.chromes[1]
);