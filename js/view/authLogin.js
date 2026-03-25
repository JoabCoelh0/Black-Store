import {checaEmail, senhaCompativeis} from "../service/authService.js"

const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const form = document.querySelector('#form-login')
const menssagem = document.querySelector('.menssagem')
   
form.addEventListener('submit',(e) => {
    e.preventDefault() 
    const emailValido = checaEmail(email.value)
    const senhaValida = senhaCompativeis(email.value, senha.value) 
    if(emailValido.success && senhaValida.success){

        window.location.href = 'dashboard.html'

    } else {
        menssagem.style.display = 'block'
        email.style.border = '1.5px solid red'
        senha.style.border = '1.5px solid red'
    }
    
}) 