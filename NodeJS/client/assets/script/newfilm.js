import { FilmService } from "./film.service.js";
import { Film } from "./film.class.js";

let btnNew = document.querySelector('#newfilm');
let F = new FilmService();

btnNew.addEventListener('click', () => {
  let titre = document.querySelector('#titre');
  let genre = document.querySelector('#genre');
  let pays = document.querySelector('#pays');
  let date = document.querySelector('#date');
  let resume = document.querySelector('#resume');

  let newFilm = new Film('', titre.value, genre.value, pays.value, date.value, resume.value);
  
  let promise = F.add(newFilm);
  promise.then(() => {
    titre.value = '';
    genre.value = '';
    pays.value = '';
    date.value = '';
    resume.value = '';
  });
});