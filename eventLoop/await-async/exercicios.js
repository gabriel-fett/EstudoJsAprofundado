// function buscarNome() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("Gabriel");
//     }, 1000);
//   });
// }

// async function mostrarNome() {
//   console.log("Buscando...");
//   const nome = await buscarNome();
//   console.log("Nome:", nome);
// }

// mostrarNome();

// APRENDIZADO DE ASYNC COM AWAIT, O AWAIT AGUARDA O PROMISE.
// O AWAIT RECEBE O VALOR E TRATA ELE, EM PROMISE MUITAS VEZES O VALOR É DEFINIDO NO PROPRIO AWAIT COMO ABAIXO:

function buscarIdade(nome) {
  return new Promise(function (resolve, reject) {
    if (nome === "Gabriel") {
      resolve(22);
    } else {
      reject("Usuário não encontrado!");
    }
  });
}

async function mostrarIdade() {
  try {
    const idade = await buscarIdade("Joao");
    console.log("Idade:", idade);
  } catch (erro) {
    console.log("Erro:", erro);
  }
}

mostrarIdade();

// AQUI É UM EXERCICIO QUE MOSTRA QUE SE TROCARMOS DIRETAMENTE O RESULTADO NO AWAIT O CATCH AUTOMATICAMENTE FUNCIONA, RETORNANDO USUARIO NÃO ENCONTRADO.
// AQUI O QUE FOI DEFINIDO É QUE O RESULTADO DE AWAIT PODE SER ALTERADO NO PROPRIO AWAIT.

// EXEMPLO DE DESENVOLVIMENTO ATUAL:

// O valor vem do usuário, não está fixo no código

// async function login() {
//   const email = document.getElementById("email").value;
//   const senha = document.getElementById("senha").value;

//   try {
//     const usuario = await autenticar(email, senha); // vem do input
//     console.log("Logado:", usuario.nome);
//   } catch (erro) {
//     console.log("Erro:", erro);
//   }
// }
// Exemplos reais de quando isso acontece:

// Login → passa email e senha do formulário
// Busca → passa o texto que o usuário digitou
// Carregar perfil → passa o ID do usuário logado
// Salvar dado → passa o objeto que o usuário preencheu
