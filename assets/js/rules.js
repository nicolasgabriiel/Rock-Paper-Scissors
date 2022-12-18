//Armazena o botão rules
const buttonRules = document.getElementById('rules')
//Armazena todos os botões principais
const listaBotoes = document.querySelectorAll('.button')
//Armazena a Página Oculta Rules
const pageRules = document.getElementById('pageRules')

//Quando o botão rules for clicado, executa a função abrirRules
buttonRules.addEventListener('click', abrirRules)
function abrirRules() {
ofuscarPagina()
mostrarRules()
}
//Função que torna toda a página ofuscada e desabilita os clicks da página
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
//Função que mostra a Página Rules oculta
function mostrarRules(){
    pageRules.classList.remove('hide')
}