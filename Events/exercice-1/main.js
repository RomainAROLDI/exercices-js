const btnClic = document.querySelector('#interaction');

let count = 0;

btnClic.addEventListener('click', () => {
    count++;
    console.log(`Nombre de clicks: ${count}`);
});
