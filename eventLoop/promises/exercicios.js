// const promessa = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Dados chegaram!");
//   }, 2000);
// });

// console.log("Aguardando...");

// promessa.then(function (resultado) {
//   console.log(resultado);
// });

// console.log("Código continua rodando");

// O RESULTADO SERIA -> AGUARDANDO -> CODIGO CONTNUA RODANDO -> DADOS CHEGARAM. O THEN SO EXECUTA QUANDO O PROMISE RETORNA O RESULTADO.

// const promessa = new Promise(function (resolve, reject) {
//   const deuCerto = false;

//   if (deuCerto) {
//     resolve("Dados chegaram!");
//   } else {
//     reject("Algo deu errado!");
//   }
// });

// promessa
//   .then(function (resultado) {
//     console.log("Sucesso:", resultado);
//   })
//   .catch(function (erro) {
//     console.log("Erro:", erro);
//   });

// AQUI O THEN PEGA O RESULTADO POSITIVO E O CATCH PEGA O RESULTADO NEGATIVO, SENDO ASSIM A VARIAVEL deuCerto QUANDO TRUE, O RESULTADO SERÁ SALVO E IMPRIMIDO NO PARAMETRO resultado
