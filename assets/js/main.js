const containerBotoes = document.querySelector('.container-buttons')

const containerDisputa = document.querySelector('.container-disputa')

const mensagemVencedor = document.querySelector('.mensagem-vencedor')

let youPicked = document.querySelector('.you-picked')

let housePicked = document.querySelector('.house-picked')

const inserirMensagem = document.querySelector('#mensagemVencedor')

const buttonPlayAgain = document.getElementById('playAgain')

let codeHouse;

var codigo;

let codigoOponente;


function seletor(code){
    codigo = code
    fecharPrincipal()
    mostrarIndividual()
    selectionOne()
    selectionTwo()  
    gerarAleatório()
    setTimeout(gerarOponente, 100)
    
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

    if(codigo === 'pedra'){
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
    declararVencedor()
    setTimeout(mostrarPlayAgain, 200)
}

function mostrarPlayAgain (){
    containerDisputa.style.width = "60%"
    mensagemVencedor.classList.remove('hide')
}

function declararVencedor (){
    if(codigo === codigoOponente){
        draw()
    }else if(codigo == 'tesoura' && codeHouse === 2 ||codigo == 'tesoura' &&  codeHouse === 4){
        winner()
    }else if(codigo == 'papel' && codeHouse === 5 ||codigo == 'papel' && codeHouse === 3){
        winner()
    }else if(codigo == 'spock' && codeHouse === 5 || codigo == 'spock' && codeHouse === 1){
        winner()
    }else if(codigo == 'lagarto' && codeHouse === 3 || codigo == 'lagarto' && codeHouse === 2 ){
        winner()
    }else if(codigo == 'pedra' && codeHouse === 4 || codigo == 'pedra' && codeHouse === 1){
        winner()
    }else{
        loser()
    }
}
function winner (){

inserirMensagem.innerHTML = "you win"
}
function loser (){
inserirMensagem.innerHTML = "you lose"
}
function draw(){
inserirMensagem.innerHTML = "draw"
}

buttonPlayAgain.addEventListener('click', playAgain)
function playAgain (){
    containerDisputa.classList.add('hide')
    containerBotoes.classList.remove('hide')
    housePicked.removeAttribute('class')
    youPicked.removeAttribute('class')
}