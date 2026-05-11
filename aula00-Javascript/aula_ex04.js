//Função que recebe um objeto como argumento
function exibirInfoProduto(produto)
{
    return `Produto: ${exibirInfoProduto.nome}, 
    Preço: ${exibirInfoProduto.preço.toFixed(2)},
    Estoque:${exibirInfoProduto.estoque} unidade.`;
}

const produto1 = {
    nome: "Notebook",
    preco: 3500.00,
    estoque: 10
}

const produto2 = {
    nome: "Monitor",
    preco: 500.50,
    estoque: 15
}

console.log(exibirInfoProduto(Produto1));
console.log(exibirInfoProduto(Produto2));