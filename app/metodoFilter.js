// Variável para armazenar todos os botões com classe "btn"
const botoes = document.querySelectorAll(".btn");

botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  // Armazena qual botão esta sendo clicado
  const elementoBtn = document.getElementById(this.id);
  // Armazena qual value o botão clicado possuí
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);

  exibirOsLivrosNaTela(livrosFiltrados);

  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotal(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDispoiveis.innerHTML = `<div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor"> ${valorTotal} </span></p>
</div>`;
}
