
let largura = 0;
let altura = 0;
let vidas = 1;
let tempo = 51;
let criaTempoMosquito = 1500;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal'){
    criaTempoMosquito = 1500
} else if(nivel === 'dificil') {
        criaTempoMosquito = 1000
    }else{
            criaTempoMosquito = 500
        };

function ajustarTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth; 
}

ajustarTamanho();


function posicaoMosquito(){


    
    //remover mosquito anterior
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove();

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        } else{
            document.getElementById("v" + vidas).src = "../Mata mosquito/imagens/coracao_vazio.png";
               
           vidas++
        }
      
        
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    let mosquito = document.createElement('img');
    mosquito.src = '../Mata mosquito/imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }
    document.body.appendChild(mosquito);
    
    //posicionando o elemento no HTML
    mosquito.style.left = `${posicaoX}px`;
    mosquito.style.top = `${posicaoY}px` ;
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)


    switch (classe) {
    case 0:
        return 'mosquito1';
    case 1:
        return 'mosquito2';
    case 2:
        return 'mosquito3';
    }

}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)


    switch (classe) {
    case 0:
        return 'ladoA';
    case 1:
        return 'ladoB';
    }
}


let cronometro = setInterval(function () {
    tempo--

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById("tempo").innerHTML = tempo;
    }
    
  }, 1000);

 function iniciarJogo(){
    let nivel = document.getElementById("nivel").value;

    if(nivel === ''){
        alert('Por favor, escolha uma dificuldade');
        return false;
    }

    window.location.href = "index.html?" + nivel;
 }