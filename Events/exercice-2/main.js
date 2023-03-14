const form = document.querySelector('#mon-formulaire');
const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const dateNaissance = document.querySelector('#date-naissance');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Récupération des valeurs des champs
  const nomValue = nom.value;
  const prenomValue = prenom.value;
  const dateNaissanceValue = dateNaissance.value;

  // Calcul de l'âge en utilisant l'année de naissance
  const dateNaissanceObj = new Date(dateNaissanceValue);
  const maintenant = new Date();
  const age = maintenant.getFullYear() - dateNaissanceObj.getFullYear();

  // Affichage du message de bienvenue avec l'âge
  message.textContent = `Bienvenue ${prenomValue} ${nomValue} ! Vous avez ${age} ans.`;

  // Effacement du contenu des champs
  nom.value = '';
  prenom.value = '';
  dateNaissance.value = '';
});
