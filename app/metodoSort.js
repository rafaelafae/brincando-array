// Armazena botão de ordenar por preço
let btnOrdenarPreco = document.getElementById("btnOrdenarPorPreco");

// Dá vida ao botão
btnOrdenarPreco.addEventListener("click", ordenarPreco);

// Função para ordenar livros por preço, do menor para o maior
function ordenarPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}
