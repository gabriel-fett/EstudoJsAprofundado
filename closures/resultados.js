// Cria uma função criarSaudacao que recebe um nome e retorna uma função que, quando chamada, imprime "Olá, [nome]!".

// function criarSaudacao(nome) {
//   return function () {
//     console.log("Olá", nome);
//   };
// }

// const saudarGabriel = criarSaudacao("Gabriel");
// const saudarAna = criarSaudacao("Ana");

// saudarGabriel();
// saudarAna();

// AQUI FOI USADO A FUNCAO FUNCTION COM O PARAMETRO NOME, E ASSIM SALVANDO O PARAMETRO.

// exercicio extra:
//um pouco mais desafiador:
//Cria uma função criarSomador que recebe um número e retorna uma função que soma esse número a qualquer valor que receber.

// function criarSomador(numero) {
//   return function (valor) {
//     return numero + valor;
//   };
// }

// const somarCinco = criarSomador(5);
// const somarDez = criarSomador(10);

// console.log(somarCinco(3)); // deve imprimir: 8
// console.log(somarDez(3)); // deve imprimir: 13

// AQUI O FOCO FOI APRIMORAR OS CONECITOS DE PARAMETROS E LOGICA E INTERPRETAÇÃO DO QUE SE PEDE.

// Desafio final:
// Crie uma função criarMultiplicador que recebe um número e retorna uma função que multiplica esse número por qualquer valor que receber.

function criarMultiplicador(numero) {
  return function (valor) {
    return numero * valor;
  };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(duplicar(5));
console.log(triplicar(5));

// MAIS UM EXERCICIO PARA FORTIFICAR O APRENDIZADO
