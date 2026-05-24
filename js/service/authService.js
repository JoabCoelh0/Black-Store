import { getDados } from "../model/localStorageModel.js";


export function checaEmail(email){
    const dados = getDados(email)
    if(dados !== null){
        return { success: true, message: 'Acesso liberado' }
    } else {
        return { success: false, message: 'Email ou senha inválidos' }
    }
}

export function senhaCompativeis(email, senha){
    const dados = getDados(email)
    if(senha === dados.senha){
        return { success: true, message: 'Acesso liberado' }
        
    } else {
        return { success: false, message: 'Email ou senha inválidos' }
    }
}   
/*
const emailValido = checaEmail(email.value)
const senhaValida = senhaCompativeis(email.value, senha.value) 

liberarAcesso(emailValido, senhaValida)
*/

import {
  auth,
  googleProvider
} from "../config/firebaseConfig.js";

import {
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

export async function loginComGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Erro ao fazer login com Google:", error);
    throw error;
  }
}

export async function logout() {
  await signOut(auth);
}