window.onload = function(){
    const buscarNoticia = document.querySelector("#buscarNoticia");
    const wrapNoticia = document.querySelector(".zonaNoticias");
    const tituloN = document.querySelector(".tituloBusqueda");

const obtenerNoticia = async () => {
    const valor = buscarNoticia.value;
    const api = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${valor}&setLang=Spanish&cc=es-ES&mkt=es-ES&freshness=Day&textFormat=Raw&safeSearch=Off`, {
        "method": "GET", "headers": {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": "dd5934dbb7msh9131495b2e28ba0p1cbc37jsnc0860d71a641",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
    }})
    const data = await api.json();
    borrarNoticia();
    noticia(data, valor)
    buscarNoticia.value = '';
}
const noticia = (data, valor) => {
    tituloN.innerHTML =`<h2>Noticias sobre ${valor}</h2>`;

    //Recorremos el array de objetos JSON.
    data.value.forEach( noticia => wrapNoticia.innerHTML += `
    <div id='noticia'>
        <h3>${noticia.name}</h3>
        <p>"${noticia.description}" ... <a href='${noticia.url}'>Leer noticia completa</a></p>
        <p id='autor'>${noticia.provider[0].name}</p>
    </div>`
    );
}

    const borrarNoticia = () => { wrapNoticia.innerHTML = ''; }

    buscarNoticia.onchange = obtenerNoticia;
}
