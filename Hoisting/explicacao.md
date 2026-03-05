Nessa sessão descobrimos mais detalhes afundo de js
vimos que undefined não é vazio quando utilizamos o var, ele entende que existe a variavel, mas não enxerga os valores.

quando let ou const dao erros, eles não continuam o código.

function guarda um bloco de código para executar quando for chamado.

arrow function muito usado para react para salvar um bloco de código dentro de uma variavel.

adendo: function pode ser chamada antes de declarar. const com arrow function só depois.

diferenças de código:

function saudacao() {
  console.log("Olá!") // dentro
}

const saudacao = () => {
  console.log("Olá!") // dentro
}