// EXERCÍCIO INDIVIDUAL
// Cria uma Promise que recebe um número.
// Se o número for maior que 10 → resolve com "Número aprovado!"
// Se não → rejeita com "Número pequeno!"
// Testa com numero = 15 e depois com numero = 5

// const numero = 15;

// const promessa = new Promise(function (resolve, reject) {
//   if (numero > 10) {
//     resolve("Numero aprovado");
//   } else {
//     reject("numero pequeno");
//   }
// });

// promessa
//   .then(function (resultado) {
//     console.log(resultado);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// EXERCÍCIO INDIVIDUAL

// Cria uma Promise que simula um login.
// Crie um objeto usuario com nome e senha.
// Se a senha for "1234" → resolve com "Bem vindo, [nome]!"
// Se não → rejeita com "Senha incorreta!"
// Testa com senha correta e depois com senha errada.

const usuario = { nome: "Gabriel", senha: "1234" };

const promessa = new Promise(function (resolve, reject) {
  if (usuario.senha == 1234) {
    resolve("Bem vindo!");
  } else {
    reject("Senha incorreta");
  }
});
promessa
  .then(function (resultado) {
    console.log(resultado, usuario.nome);
  })
  .catch(function (erro) {
    console.log(erro);
  });

// AQUI DENTRO DO OBJETO FOI CONFIRMADO QUE SE A SENHA FOR 1234 vai retornar bem vindo
