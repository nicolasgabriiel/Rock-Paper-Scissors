const containerBotoes = document.querySelector('.container-buttons')

const containerDisputa = document.querySelector('.container-disputa')

let youPicked = document.querySelector('.you-picked')

let housePicked = document.querySelector('.house-picked')

let codeHouse;

let codigo;

let codigoOponente;

function seletor(code){
    codigo = code
    fecharPrincipal()
    mostrarIndividual()
    selectionOne()
    selectionTwo()  
    gerarAleatório()
    setTimeout(gerarOponente, 3000)
}

function fecharPrincipal (){
    containerBotoes.classList.add('hide')
}

function mostrarIndividual (){
containerDisputa.classList.remove('hide')
}

function selectionOne(){
    youPicked.classList.add('button')
    youPicked.classList.add('button-individual')

    if(codigo == 'pedra'){
        youPicked.classList.add('button5')
    }
    else if(codigo === 'tesoura'){
        youPicked.classList.add('button1')
    }
    else if(codigo == 'papel'){
        youPicked.classList.add('button2')
    }
    else if(codigo == 'spock'){
        youPicked.classList.add('button3')
    }else{
        youPicked.classList.add('button4')
    }
}

function selectionTwo() {
    housePicked.classList.add('button')
    housePicked.classList.add('button-individual')
    housePicked.classList.add('house-Vazia')
}

function gerarAleatório (min, max) {
    min = Math.ceil(1);
    max = Math.floor(5);
    codeHouse = Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarOponente(){
    if(codeHouse == 1){
        housePicked.classList.remove('house-Vazia')
        housePicked.classList.add('button1')
        codigoOponente = 'tesoura'
    }else if(codeHouse == 2){
        housePicked.classList.remove('house-Vazia')
        housePicked.classList.add('button2')
        codigoOponente = 'papel'
    }else if(codeHouse == 3){
        housePicked.classList.remove('house-Vazia')
        housePicked.classList.add('button3')
        codigoOponente = 'spock'
    }else if(codeHouse == 4){
        housePicked.classList.remove('house-Vazia')
        housePicked.classList.add('button4')
        codigoOponente = 'lagarto'
    }else {
        housePicked.classList.remove('house-Vazia')
        housePicked.classList.add('button5')
        codigoOponente = 'pedra'
    }
}
