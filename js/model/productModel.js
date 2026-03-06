export async function buscasProdutos(){
    try {
        const response = await fetch('https://fakestoreapi.com/products/')
        
        /*Lança o erro, caso os dados não cheguem */
        if(!response.ok){
            throw new Error('Dados não carregados')
        }

        const dados = await response.json()
        console.log(dados);
        
        return dados 
        
    } catch (error) {
        console.error(`Erro ao buscar produtos: ${error.message}`)
    }
}

buscasProdutos()