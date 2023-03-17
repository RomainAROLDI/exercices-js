import { Film } from "./film.class.js";

export class FilmService {
  constructor() {

  }

  /**
   * Récupère l'ensemble des données et les ajoutent dans le DOM
   * @param {DOM} target - localisation dans le dom
   * @return {Array<Film>}
   */
  getAll(target) {
    let myHeaders = new Headers();
    let url = '/film';
    let options = {
      method: 'GET',
      headers: myHeaders
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        response.forEach(elt => {
          let myFilm = document.createElement('tr');

          let myTitle = document.createElement('td');
          myTitle.innerText = elt.nom;

          let myModif = document.createElement('td');
          let myIcone = document.createElement('i');
          myIcone.classList.add('fas','fa-light', 'fa-circle-info');
          let myLinkToDetails = document.createElement('a');
          myLinkToDetails.setAttribute('href', './pages/details.html#' + elt._id);
          myLinkToDetails.appendChild(myIcone);
          myModif.appendChild(myLinkToDetails);
          myModif.style.textAlign = 'center';

          let myDelete = document.createElement('td');
          let btnDelete = document.createElement('button');
          let myIcone2 = document.createElement('i');
          myIcone2.classList.add('fas', 'fa-light', 'fa-trash')
          btnDelete.classList.add('btn', 'btn-outline-danger');
          myDelete.style.textAlign = 'center';
          myDelete.appendChild(btnDelete);
          btnDelete.appendChild(myIcone2);
          btnDelete.addEventListener('click', () => {
            this.remove(elt._id);
          });

          target.appendChild(myFilm);
          myFilm.appendChild(myTitle);
          myFilm.appendChild(myModif);
          myFilm.appendChild(myDelete);
        });
        return response;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
    }
    
    /**
     * Renvoie le film correspondant à l'identifiant
     * @param {String} id - _id du film concerné
     * @return {Film}
    */
   get(id) {
     let myHeaders = new Headers();
     let url = '/film/' + id;
     let options = {
       method: 'GET',
       headers: myHeaders
      };
      
      return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((resource) => {
        let tmp = new Film(resource._id, resource.nom, resource.genre, resource.pays, resource.date, resource.synopsis);
        return tmp;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  /**
   * Modifie le film passé en paramètre
   * @param {String} film 
   */
  modif(film) {
    let url = '/film/' + film._id;
    let options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(film)
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('reussi')
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  /**
   * Ajoute un novueau film à la collection
   * @param {Film} film 
   */
  add(film) {
    let url = '/film';
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(film)
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('reussi');
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  /**
   * Suppression d'un film d'identifiant id
   * @param {String} id - identifiant du film 
   */
  remove(id) {
    let url = '/film/' + id;
    let myHeaders = new Headers();
    let options = {
      method : 'DELETE', 
      headers: myHeaders
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('Réussi');
          location.reload();
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }
}
