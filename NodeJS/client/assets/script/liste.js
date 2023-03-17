import { FilmService } from './film.service.js';

let tbody = document.querySelector('#listFilm');
const Film = new FilmService();
Film.getAll(tbody);