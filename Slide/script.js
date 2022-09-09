const imagens = [
    { 'id': '1', 'url':'img/cidade.png'},
    { 'id': '2', 'url':'img/conexao.png'},
    { 'id': '3', 'url':'img/lar.png'},
    { 'id': '4', 'url':'img/luzes.png'},
    { 'id': '5', 'url':'img/por-do-sol.png'},
    { 'id': '6', 'url':'img/sonho.png'},
]

const containerItems = document.querySelector( '#container-items')

const carregarImages = (imagens, container) => {
    imagens.forEach (imagem => {
        container.innerHTML += `
        <div class="item"> 
        <img src='${imagem.url}'>
        </div>
        `
    })
}


carregarImages ( imagens, containerItems); 

let items = document.querySelectorAll('.item')

const anterior = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}
const proxima = () => {
    const ultimoItem = items[items.length -1]
    containerItems.insertBefore(ultimoItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#anterior').addEventListener('click', anterior)
document.querySelector('#proxima').addEventListener('click', proxima)