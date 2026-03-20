import { carregarProdutos } from "../controller/productController.js"

const dados = await carregarProdutos() 
function rederDados(){
    const sectionProdutos = document.querySelector('#section-produtos')
    
    try {

        for(let dadosProdutos of dados){

            const divProduto = document.createElement('div')
            divProduto.classList.add('produto')
            
            const produto = {
                imagemProduto: dadosProdutos.image,
                nomeProduto: dadosProdutos.title,
                precoProduto: dadosProdutos.price
            }
            
            divProduto.innerHTML = 
                        `<div class="card-produto">
                            <div class="img-produto">
                                <img src="${produto.imagemProduto}" alt="${produto.nomeProduto}">
                            </div>

                            <div class="descricao-produto">
                                <h3 class="title-produto">${produto.nomeProduto}</h3>
                                <h4 class="preco">R$ ${produto.precoProduto}</h4>
                            </div>

                            <div class="botao">
                                <button class="add-carrinho">
                                <i class="fa-solid fa-cart-shopping"></i>
                                Adicionar ao carrinho
                                </button>
                                <button class="comprar">
                                Comprar agora
                                </button>
                            </div>
                        </div>`
            
            sectionProdutos.appendChild(divProduto)
        }
    } catch (error) {
        console.error(`${error.message}`);
        
    }
   
}

 rederDados()

