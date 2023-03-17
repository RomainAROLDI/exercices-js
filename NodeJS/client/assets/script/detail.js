import { FilmService } from './film.service.js';

const container = document.querySelector('div#container');

const Film = new FilmService();
const film = Film.get(window.location.hash.substring(1));

container.textContent = film.nom;