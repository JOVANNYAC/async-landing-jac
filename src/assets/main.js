
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCJoOIj9Yu71wklP3EFzL8-A&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.querySelector('#contenido');
const mensajeError = null || document.getElementById('mensajeError');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd491da0009mshaaf6b6979b266ecp100930jsnd696c774fe2a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
   try {
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map(video => `
           <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
             </div>
           </div>
      `).slice(0,4).join('')}
      `;
     content.innerHTML = view;
   } catch(error){
      mensajeError.innerHTML = (`Aqui deberias ver unos videos pero tenemos un error en el servidor: ${error}`);
   }
})();