import { buscasProdutos } from '../model/productModel.js';

export async function carregarProdutos(){
    const dadosProdutos = await buscasProdutos()
    return dadosProdutos
}