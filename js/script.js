let largura = 0;
let altura = 0;

function ajustarTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth; 
}

ajustarTamanho();


function posicaoMosquito(){

    //remover mosquito anterior
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove();
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    let mosquito = document.createElement('img');
    mosquito.src = '../Mata mosquito/imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.id = 'mosquito';
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