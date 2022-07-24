const relogio = document.getElementsByClassName('relogio')[0];
const botao = document.getElementById('botao');
const botaoPausar = document.getElementById('botao-pausar');
const botaoParar = document.getElementById('botao-parar');

let tempo = 1000;
let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;

botao.addEventListener('click', () => {
    start();
})

function start(){
    cronometro = setInterval(() => {
        segundos++;
        if(segundos > 59){
            minutos++;
            segundos = 0;
        }
        if(minutos > 59){
            horas++;
            minutos = 0;
        }
        relogio.innerHTML = horas + ":" + minutos + ":" + segundos;   
    }, tempo);

    botaoPausar.addEventListener('click', () => {
        pause(cronometro)
    });

    botaoParar.addEventListener('click', () => {
        parar(cronometro);
    })
}

function pause(cronometro){
    clearInterval(cronometro);
}

function parar(cronometro){
    clearInterval(cronometro);
    segundos = 0;
    minutos = 0;
    horas = 0;

    relogio.innerHTML = horas + ":" + minutos + ":" + segundos;
}