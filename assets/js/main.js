const containerBotoes = document.querySelector('.container-buttons')

const containerDisputa = document.querySelector('.container-disputa')

let youPicked = document.querySelector('.you-picked')

let codigo;
function seletor(code){
    codigo = code
    fecharPrincipal()
    mostrarIndividual()
    selectionOne()
   
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