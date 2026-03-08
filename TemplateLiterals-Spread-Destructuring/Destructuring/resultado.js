//EXERCICIO SOZINHO
//
// Você tem um objeto de produto e um array de pedidos.
//
// 1. Usando destructuring de objeto, extraia: nome, preco e categoria
//    do objeto produto e exiba cada um no console.
//
// 2. Usando destructuring de array, extraia o primeiro e o terceiro
//    pedido do array pedidos e exiba cada um no console.

// const produto = {
//     nome: "Teclado Mecânico",
//     preco: 350,
//     categoria: "Periféricos",
//     emEstoque: true
// };

// const pedidos = ["Pedido #001", "Pedido #002", "Pedido #003", "Pedido #004"];

// // Resolva aqui

// const { nome, preco, categoria } = produto;
// const [primeiro, , terceiro] = pedidos;

// console.log(nome);
// console.log(preco);
// console.log(categoria);
// console.log(primeiro);
// console.log(terceiro);

//================

// MAIS UM EXERCICIO SOLO:
//
//
// Você tem um objeto de usuário e um array de permissões.
//
// 1. Crie uma função chamada exibirUsuario que receba o objeto usuario
//    e use destructuring direto no parâmetro para extrair:
//    nome, cargo e ativo.
//    A função deve exibir no console:
//    "Nome: Gabriel | Cargo: Dev | Status: Ativo" (ou "Inativo" se ativo for false)
//
// 2. Usando destructuring de array, extraia apenas a segunda
//    e a quarta permissão do array e exiba no console.
//
// Chame a função exibirUsuario passando o objeto usuario.

const usuario = {
    nome: "Gabriel",
    cargo: "Dev",
    ativo: true,
    empresa: "Baldussi"
};

const permissoes = ["leitura", "escrita", "exclusão", "administrador"];

function exibirUsuario({ nome, cargo, ativo }) {
    console.log(`${nome} - ${cargo}  ${ativo ? "Ativo" : "false"}`);
}

exibirUsuario(usuario);

const [, segunda, , quarta] = permissoes
console.log(segunda)
console.log(quarta)