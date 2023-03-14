const container = document.querySelector('#container');
const randomColorButton = document.querySelector('#random-color');
const customColorButton = document.querySelector('#custom-color');
const redInput = document.querySelector('#red');
const greenInput = document.querySelector('#green');
const blueInput = document.querySelector('#blue');

randomColorButton.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

customColorButton.addEventListener('click', (event) => {
    event.preventDefault();

    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    if (!redValue || !greenValue || !blueValue) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (redValue < 0 || redValue > 255 || greenValue < 0 || greenValue > 255 || blueValue < 0 || blueValue > 255) {
        alert('Les valeurs doivent être comprises entre 0 et 255.');
        return;
    }

    container.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    redInput.value = '';
    greenInput.value = '';
    blueInput.value = '';
});
