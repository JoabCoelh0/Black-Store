import { carregarProdutos } from "../controller/productController.js"
const dados = await carregarProdutos() 
const sectionProdutos = document.querySelector('#section-produtos')


function rederDados(produtos){
    
    try {

        for(let dadosProdutos of produtos){

            const divProduto = document.createElement('div')
            divProduto.classList.add('produto')
            
            const produto = {
                imagemProduto: dadosProdutos.image,
                nomeProduto: dadosProdutos.title,
                precoProduto: dadosProdutos.price,
                categoria: dadosProdutos.category
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

rederDados(dados)

function filtroCategorias(){
    const categorias = document.querySelectorAll('input[name="categoria"]:checked');
    const valores = [...categorias].map(input => input.value);

    console.log(categorias);
    

    let produtosPorCategoria = [];
    for(let item of dados){

        const produto = {
            imagemProduto: item.image,
            nomeProduto: item.title,
            precoProduto: item.price,
            categoria: item.category
        }
            
        if(valores.includes(produto.categoria)){
            produtosPorCategoria.push(item)
        } 
        
    }   

    sectionProdutos.innerHTML = ''

    if (valores.length == 0) {
        rederDados(dados)
    }

    rederDados(produtosPorCategoria)
}




document.querySelectorAll('.categoria').forEach(div => {
  div.addEventListener('click', (e) => {
    e.preventDefault()
    filtroCategorias()
  });
});
 
/*

const btnAplicarFiltro = document.querySelector(".aplicarFiltro")
btnAplicarFiltro.addEventListener('click',(e)=>{
    e.preventDefault()
    filtroCategorias()
})
*/