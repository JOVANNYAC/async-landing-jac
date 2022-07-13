

const URL =  'https://api.thecatapi.com/v1/images/search';




async function mostrarGato() {
    const response = await fetch(URL);
    const data = await response.json();
    const img = document.querySelector('#gato');
    img.src = data[0].url;
}

