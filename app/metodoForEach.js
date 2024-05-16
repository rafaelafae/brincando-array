// Variável para salvar elemento de HTML
const elementoParaInserirLivros = document.getElementById("livros");
// Armazena ID de section com valor total para comprar todos os livros disponíveis
const elementoComValorTotalDeLivrosDispoiveis = document.querySelector(
  "#valor_total_livros_disponiveis"
);

function exibirOsLivrosNaTela(listaDeLivros) {
  // Limpando elementos na tela do html
  elementoComValorTotalDeLivrosDispoiveis.innerHTML = "";
  elementoParaInserirLivros.innerHTML = "";
  listaDeLivros.forEach((livro) => {
    // Variável para armazenar verificação a disponibilidade do livro
    let disponibilidade =
      livro.quantidade > 0 ? "livros__imagens" : "livros__imagens indisponivel";
    // Mostrando elementos na tela do html
    elementoParaInserirLivros.innerHTML += `<div class="livro">
         <img class="${disponibilidade}" src="${livro.imagem}" alt="${
      livro.alt
    }" />
         <h2 class="livro__titulo">
           ${livro.titulo}
         </h2>
         <p class="livro__descricao">${livro.autor}</p>
         <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
         <div class="tags">
           <span class="tag">${livro.categoria}</span>
         </div>
       </div>`;
  });
}
