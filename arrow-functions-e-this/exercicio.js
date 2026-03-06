// const carro = {
//   marca: "Toyota",

//   ligar: function () {
//     console.log("Marca:", this.marca);
//   },
// };

// carro.ligar();

//aqui vai aparecer a marca do veiculo no log

// const usuario = {
//   nome: "Gabriel",
//   idade: 22,

//   apresentar: function () {
//     console.log("Olá, meu nome é", this.nome, "e tenho", this.idade, "anos");
//   },
// };

// usuario.apresentar();

//aqui vai aparecer o texto mostrando o nome e idade, o this pega o que está acima dele.

// const pessoa = {
//   nome: "Gabriel",

//   falarNormal: function () {
//     console.log("Normal - this.nome:", this.nome);
//   },

//   falarArrow: () => {
//     console.log("Arrow - this.nome:", this.nome);
//   },
// };

// pessoa.falarNormal();
// pessoa.falarArrow();

// Arrow function → busca o this de fora do objeto
// Função normal → não busca "dentro" exatamente — ela pega o this de quem a chamou
