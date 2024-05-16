// Variável em array para guardar dados importados
let livros = [];
const endpointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

// Função assincrona - permite que outras operações continuem rodando enquanto aguarda a conclusão da promessa
async function getBuscarLivrosDaAPI() {
  // await - aguarda a conclusão de uma operação assincrona
  // fetch - busca informações na API
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
