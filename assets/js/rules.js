const buttonRules = document.getElementById('rules')

const listaBotoes = document.querySelectorAll('.button')


listaBotoes.disable


buttonRules.addEventListener('click', abrirRules)


function abrirRules() {
ofuscarPagina()

}


function ofuscarPagina (){
    buttonRules.disabled = true
    for(var i = 0; i < listaBotoes.length ; i ++){
     listaBotoes[i].disabled = true
     console.log(listaBotoes[i].disabled)
    }
    document.querySelector('header').style.opacity = ".2"
    document.querySelector('.container-buttons').style.opacity = ".2"
    document.querySelector('footer').style.opacity = ".2"
}