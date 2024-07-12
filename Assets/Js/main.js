
//3º Passo obtendo os segundos
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

console.log(criaHoraDosSegundos(10));
// 1 º Passo: obtendo as propriedades no html
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;// variável global
let timer;

//4º Passo Criando um contador de segundos hora etc...
function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

// 2º Passo: Capturando o Click dos botões
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
    

});
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}); 