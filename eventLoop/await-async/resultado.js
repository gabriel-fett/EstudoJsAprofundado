// EXERCÍCIO INDIVIDUAL

// Crie uma função buscarProduto(id) que retorna uma Promise.
// Se id === 1 → resolve com "Produto: Notebook"
// Se não → rejeita com "Produto não encontrado!"
// Crie uma função async que usa await + try/catch pra buscar o produto.
// Teste com id = 1 e depois com id = 99.

function buscarProduto(id) {
  return new Promise(function (resolve, reject) {
    if (id === 1) {
      resolve("Produto: Notebook");
    } else {
      reject("Produto não encontrado");
    }
  });
}

async function mostraProduto() {
  try {
    const resultado = await buscarProduto(2);
    console.log("o produto é", resultado);
  } catch (erro) {
    console.log(erro);
  }
}

mostraProduto();
