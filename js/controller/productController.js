import { buscasProdutos } from '../model/api.js';

export async function carregarProdutos(){
    const dadosProdutos = await buscasProdutos()
    return dadosProdutos
}