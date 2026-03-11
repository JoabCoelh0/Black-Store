import { carregarProdutos } from "../controller/productController.js"

const sectionProdutos =  document.querySelector('#section-produtos')

const produtos = await carregarProdutos()
for(let p of Object.values(produtos)){
    console.log(p);
}

