const n = parseInt(prompt("Entrez le nombre d'étages de la pyramide : "));

let color1 = prompt("Entrez la couleur du texte de la première moitié : ");
color1 = color1[0] === "#" ? color1 : "#" + color1;

let color2 = prompt("Entrez la couleur du texte de la seconde moitié : ");
color2 = color2[0] === "#" ? color2 : "#" + color2;

const losange = document.createElement("div");

for (let i = 1; i <= n; i++) {
    const ligne = document.createElement("div");
    for (let j = 1; j <= i; j++) {
        const chiffre = document.createElement("span");
        chiffre.innerText = "1";
        chiffre.style.color = color1;
        ligne.appendChild(chiffre);
    }
    losange.appendChild(ligne);
    losange.appendChild(document.createElement("br"));
}

for (let i = n - 1; i >= 1; i--) {
    const ligne = document.createElement("div");
    for (let j = 1; j <= i; j++) {
        const chiffre = document.createElement("span");
        chiffre.innerText = "1";
        chiffre.style.color = color2;
        ligne.appendChild(chiffre);
    }
    losange.appendChild(ligne);
    losange.appendChild(document.createElement("br"));
}

document.body.appendChild(losange);
