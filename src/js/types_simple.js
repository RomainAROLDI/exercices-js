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

calculSimple();
