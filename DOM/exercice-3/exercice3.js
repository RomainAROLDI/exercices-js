const container = document.createElement("div");
document.body.appendChild(container);

const ul = document.createElement("ul");
container.appendChild(ul);

let count = 1;

let userPrompt = prompt("Entrez une adresse internet (tapez 'fin' pour arrêter la saisie) : ").toLowerCase();
while (userPrompt !== "fin") {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = userPrompt;
    a.textContent = "Lien " + count;
    li.appendChild(a);
    ul.appendChild(li);
    count++;
    userPrompt = prompt("Entrez une adresse internet (tapez 'fin' pour arrêter la saisie) : ").toLowerCase();
}