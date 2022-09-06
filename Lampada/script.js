const turnOn = document.querySelector( '#turnOn' );
const turnOff = document.querySelector( '#turnOff');
const lamp = document.querySelector( '#lamp' );


function lampOn() {
    lamp.src = 'img/ligada.jpg';
    document.body.style.backgroundColor = '#FFFF0080';
    
}

function lampOff (){
        lamp.src = 'img/desligada.jpg'
        document.body.style.backgroundColor = '#00000090';
}

function lampQuebrada (){
    lamp.src = 'img/quebrada.jpg'
    document.body.style.backgroundColor = '#ECF1F2'
}

turnOff.addEventListener('click', lampOff);
turnOn.addEventListener( 'click', lampOn );
lamp.addEventListener('dblclick', lampQuebrada);