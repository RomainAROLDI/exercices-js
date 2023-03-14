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

    if (age  >= 70) {
        tarif *= 0.7;
    } else if (age <= 12) {
        tarif = 0;
    } else if (age <= 18) {
        tarif /= 2;
    }

    console.log(tarif);
}

calculTarifDisneyland();