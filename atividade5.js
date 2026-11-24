const produtos = [
  { id: 1, nome: "Teclado", estoque: true },
  { id: 2, nome: "Mouse", estoque: false },
  { id: 3, nome: "Monitor", estoque: true },
];

const emEstoque = produtos
  .filter(produto => produto.estoque)
  .map(produto => produto.nome)

console.log(emEstoque)