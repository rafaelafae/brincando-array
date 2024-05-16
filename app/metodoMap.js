function aplicarDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map((livro) => {
    // ... livro é a criação de uma nova array,
    return { ...livro, preco: livro.preco - livro.preco * desconto };
  });
  return livrosComDesconto;
}
