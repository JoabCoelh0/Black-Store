import { carregarProdutos } from "../controller/productController.js"

async function mostrarProdutos() {
    const produtos = await carregarProdutos()
    return produtos
}