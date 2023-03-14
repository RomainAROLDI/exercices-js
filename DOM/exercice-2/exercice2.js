const container = document.querySelector("div.container");

const backgroundColor = prompt("Entrez une couleur en hexadécimal pour le fond : ");
const textColor = prompt("Entrez une couleur en hexadécimal pour le texte : ");
const text = prompt("Entrez le texte à afficher : ");

container.style.color = textColor[0] === "#" ? textColor : "#" + textColor;
container.style.backgroundColor = backgroundColor[0] === "#" ? backgroundColor : "#" + backgroundColor;
container.textContent = text;

