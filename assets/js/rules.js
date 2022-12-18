//Armazena o botão rules
const buttonRules = document.getElementById('rules')
//Armazena todos os botões principais
const listaBotoes = document.querySelectorAll('.button')
//Armazena a Página Oculta Rules
const pageRules = document.getElementById('pageRules')
//Armazena o Botão que fecha a Rules
const xRules = document.getElementById('fechar-rules')

//Quando o botão rules for clicado, executa a função abrirRules
buttonRules.addEventListener('click', abrirRules)
function abrirRules() {
ofuscarPagina()
mostrarRules()
}
//Função que torna toda a página ofuscada e desabilita os clicks da página
function ofuscarPagina (){
    //desabilitando os botões clicaveis
    buttonRules.disabled = true
    for(var i = 0; i < listaBotoes.length ; i ++){
     listaBotoes[i].disabled = true
    }
    //tornadno os elementos ofuscados
    document.querySelector('header').style.opacity = ".2"
    document.querySelector('.container-buttons').style.opacity = ".2"
    document.querySelector('footer').style.opacity = ".2"
}
//Função que mostra a Página Rules oculta
function mostrarRules(){
    pageRules.classList.remove('hide')
}
//Quando o botão x for clicado, executa a função fecharRules
xRules.addEventListener('click', fecharRules)
function fecharRules(){
    habilitarPagina()
}
function habilitarPagina (){
        //habilitando os botões clicaveis
        buttonRules.disabled = false
        for(var i = 0; i < listaBotoes.length ; i ++){
         listaBotoes[i].disabled = false
        }
        //tornadno os elementos visíveis
        document.querySelector('header').style.opacity = "1"
        document.querySelector('.container-buttons').style.opacity = "1"
        document.querySelector('footer').style.opacity = "1"
}