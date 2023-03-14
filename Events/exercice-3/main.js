const carre = document.querySelector('#carre');
const container = document.querySelector('#container');

let carreTop = 0;
let carreLeft = 0;

document.addEventListener('keydown', (event) => {
  const containerRect = container.getBoundingClientRect();
  const carreRect = carre.getBoundingClientRect();

  if (event.key === 'ArrowUp') {
    carreTop = Math.max(carreTop - 10, containerRect.top - carreRect.top);
  } else if (event.key === 'ArrowDown') {
    carreTop = Math.min(carreTop + 10, containerRect.bottom - carreRect.bottom);
  } else if (event.key === 'ArrowLeft') {
    carreLeft = Math.max(carreLeft - 10, containerRect.left - carreRect.left);
  } else if (event.key === 'ArrowRight') {
    carreLeft = Math.min(carreLeft + 10, containerRect.right - carreRect.right);
  }

  carre.style.top = `${carreTop}px`;
  carre.style.left = `${carreLeft}px`;
});
