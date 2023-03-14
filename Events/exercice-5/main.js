const titles = document.querySelectorAll('.title');
const contents = document.querySelectorAll('.content');

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', () => {
    if (contents[i].style.display === 'none') {
      contents[i].style.display = 'block';
    } else {
      contents[i].style.display = 'none';
    }
  });
}
