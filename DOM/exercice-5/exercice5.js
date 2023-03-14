const personnages = [
    { name: "Amiral Akbar", online: true },
    { name: "Darth Vador", online: true },
    { name: "Luc Skywalker", online: false },
    { name: "Princesse Leia", online: false },
    { name: "Hann Solo", online: true },
    { name: "R2D2", online: false },
    { name: "C3PO", online: true },
    { name: "Chewbacca", online: false },
    { name: "Darth Sidious", online: true },
];

const liste = document.createElement("ul");

for (let i = 0; i < personnages.length; i++) {
    const personnage = personnages[i];
    const li = document.createElement("li");
    li.innerText = personnage.name;
    if (personnage.online) {
        li.style.backgroundColor = "green";
        li.style.color = "blue";
    } else {
        li.style.backgroundColor = "white";
        li.style.color = "red";
    }
    liste.appendChild(li);
}

document.body.appendChild(liste);

while (true) {

    const name = prompt("Entrez le nom du personnage (ou tapez 'fin' pour terminer) : ");
    if (name === "fin") {
        break;
    }

    const onlineStr = prompt("Le personnage est-il en ligne ? (oui ou non) : ");
    const online = (onlineStr === "oui");

    const li = document.createElement("li");
    li.innerText = name;
    if (online) {
        li.style.backgroundColor = "green";
        li.style.color = "blue";
    } else {
        li.style.backgroundColor = "white";
        li.style.color = "red";
    }

    liste.appendChild(li);
}
