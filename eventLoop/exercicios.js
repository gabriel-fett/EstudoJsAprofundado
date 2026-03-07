// console.log("1 - primeiro");

// setTimeout(function () {
//   console.log("2 - setTimeout");
// }, 0);

// console.log("3 - terceiro");

// A ORDEM CORRETA SERIA 1, 3 2 POIS O JS JOGA PARA API DO NAVEGADOR VER SE TEM ALGO, E O CALLBACK TRÁS VAZIO.
// O setTimeout foi só o trampolim pra entender o Event Loop. O conceito que importa é: código assíncrono vai pra fila e não trava a interface.

// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 1000);

// setTimeout(function () {
//   console.log("3");
// }, 500);

// console.log("4");

//O JavaScript é single thread — roda uma coisa de cada vez. Código síncrono roda na ordem. Código assíncrono vai pra fila e só roda quando a Call Stack estiver vazia.

// console.log("Buscando usuário...");

// setTimeout(function () {
//   const usuario = { nome: "Gabriel", idade: 22 };
//   console.log("Usuário chegou:", usuario.nome);
// }, 2000);

// console.log("Página pronta!");

// mesmo conceito, mesmo tendo dados ele obdece o tempo de 2 segundos
