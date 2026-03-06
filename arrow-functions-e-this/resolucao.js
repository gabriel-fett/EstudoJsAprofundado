// Escreve um código que faça tudo isso:
// Esse exercicio é feito sem ajudas, é com o conhecimento e aprendizado dos exercicios e conceito de "this"

// Cria um objeto chamado cachorro com:
// Uma propriedade raca com qualquer valor
// Um método com função normal que imprime a raça no console usando this
// Um método com arrow function que tenta fazer a mesma coisa

// const pessoa = {
//   raca: "cooker",

//   funcaoNormal: function () {
//     console.log("normal", this.raca);
//   },

//   FuncaoArrow: () => {
//     console.log("Arrow:", this.raca);
//   },
// };

// pessoa.funcaoNormal();
// pessoa.FuncaoArrow();

// tive algumas duvidas em relacao a escrita correta do funcaoArrow, e funcao normal.

// Exercicio extra
// Cria um objeto filme com:

// Uma propriedade titulo com qualquer filme que você goste
// Um método normal que imprime o título com this
// Um método arrow que tenta fazer a mesma coisa

const filme = {
  titulo: "Interestelar",

  NormalFunction: function () {
    console.log("Eu amo o filme", this.titulo);
  },

  ArrowFunction: () => {
    console.log("Amo o filme:", this.titulo);
  },
};

filme.NormalFunction();
filme.ArrowFunction();
