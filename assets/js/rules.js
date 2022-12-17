const buttonRules = document.getElementById('rules')

buttonRules.disabled = false

buttonRules.addEventListener('click', abrirRules)


function abrirRules() {
   buttonRules.disabled = true
    console.log(buttonRules.disabled)
   

}