
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.querySelector('#segundos');
    const minutos = document.querySelector('#minutos');
    const horas = document.querySelector('#horas');
    const dias = document.querySelector('#dias');

    const quantidadeSegundos = tempo % 60;
    const quantidadeMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const quantidadeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const quantidadeDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(quantidadeSegundos);
    minutos.textContent = formatarDigito(quantidadeMinutos);
    horas.textContent = formatarDigito(quantidadeHoras);
    dias.textContent = formatarDigito(quantidadeDias);

}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    // 1 de janeiro de 1970
    const dataEvento = new Date ('2022-11-26 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());