import { setDados,  getDados } from "../model/localStorageModel.js"

export function senhasIguais(senha,confirmarSenha){
    return senha === confirmarSenha
}

export function emailExiste(email) {
    const user = getDados(email)
    return user !== null
}


export function registrarUsuario(dadosUser){

    if(emailExiste(dadosUser.email)){
        return {success: false, message: 'Email já cadastrado'}
    }


    if(!senhasIguais(dadosUser.senha, dadosUser.confirmarSenha)){
        return {success: false, message: 'Senhas não conferem'}
    }


    setDados(dadosUser.email, dadosUser)
    return {success: true}
}
/*
export function liberarAcesso(emailValido, senhaValida){
    if(emailValido.success && senhaValida.success){
        window.location.href = 'dashboard.html'
    }
}*/


import { loginComGoogle } from "../service/authService.js";

const btnGoogle = document.querySelector("#btnGoogle");

btnGoogle.addEventListener("click", async () => {
  try {
    const user = await loginComGoogle();

    console.log("Usuário logado:", user);

    localStorage.setItem("usuario", JSON.stringify({
      nome: user.displayName,
      email: user.email,
      foto: user.photoURL
    }));

    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Erro ao fazer login com Google.");
  }
});