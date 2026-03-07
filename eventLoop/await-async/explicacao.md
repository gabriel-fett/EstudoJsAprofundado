# Async/Await

## O que é async/await?

É a forma moderna de escrever Promises — mesma coisa,
código mais limpo e fácil de ler.

## Duas palavras novas

- **async** → marca a função como assíncrona
- **await** → "espera aqui até a Promise resolver"

## Comparando Promise vs Async/Await

// Promise — encadeado
buscarNome()
.then(nome => console.log(nome))
.catch(erro => console.log(erro))

// Async/Await — parece código normal!
async function mostrar() {
try {
const nome = await buscarNome()
console.log(nome)
} catch(erro) {
console.log(erro)
}
}

## Try/Catch

- **try** → tenta rodar o código
- **catch** → se der erro, cai aqui — evita que o programa quebre

Sem try/catch, se a Promise rejeitar o programa quebra.
Com try/catch você captura e trata o erro.

## Regras importantes

- Só pode usar await dentro de função async
- await pausa só aquela função, não trava o JS inteiro
- await substitui o .then
- try/catch substitui o .catch

## Uso real no front-end

async function login() {
try {
const usuario = await autenticar(email, senha)
console.log("Logado:", usuario.nome)
} catch(erro) {
console.log("Erro:", erro)
}
}

## Frase para entrevista

"Async/await é uma forma mais legível de trabalhar com Promises.
O await pausa a execução da função até a Promise resolver,
sem travar o JavaScript inteiro."
