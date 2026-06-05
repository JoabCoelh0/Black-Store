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

                        `<div class="card">

                            <span class="discount">-30%</span>

                            <button class="favorite">♡</button>

                            <div class="card-image">
                                <img src="${produto.imagemProduto}" alt="${produto.nomeProduto}">
                            </div>

                            <div class="card-content">

                                <span class="category">${produto.categoria}</span>

                                <h3 class="title">${produto.nomeProduto}</h3>

                                <div class="rating">
                                    ★★★★☆ <span>(128)</span>
                                </div>

                                <div class="price">
                                    <span class="current-price">R$ ${produto.precoProduto.toFixed(2).replace('.', ',')}</span>
                                    <span class="old-price">R$ ${(produto.precoProduto * 1.3).toFixed(2).replace('.', ',')}</span>
                                </div>

                                <div class="buttons">
                                    <button class="cart-btn">🛒</button>
                                    <button class="buy-btn">Comprar agora</button>
                                </div>

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