// Monte essa frase:
// "Produto: Notebook | Preço: R$ 3500 | Disponível: Sim"
// Se emEstoque for false, deve aparecer "Não" no lugar de "Sim"

const produto = "Notebook";
const preco = 3500;
const emEstoque = true;

console.log(
  `Produto: ${produto} preço: ${preco} Disponivel: ${emEstoque ? "sim" : "não"} `,
);
