# Dia 5 — Promises

## O que é uma Promise?

Promise é um objeto que representa o resultado futuro de uma operação
assíncrona. É uma promessa de que o resultado vai chegar — pode dar
certo ou errado.

## 3 estados possíveis

- ⏳ **Pending** → ainda esperando
- ✅ **Fulfilled** → deu certo, resolve() foi chamado
- ❌ **Rejected** → deu errado, reject() foi chamado

## Estrutura básica

const promessa = new Promise(function(resolve, reject) {
if (condicao) {
resolve("Deu certo!") // entrega pro .then
} else {
reject("Deu errado!") // entrega pro .catch
}
})

promessa
.then(function(resultado) {
console.log(resultado) // roda se resolve() foi chamado
})
.catch(function(erro) {
console.log(erro) // roda se reject() foi chamado
})

## Regras importantes

- resolve() aceita apenas UM valor
- Para passar nome + mensagem: resolve(`Bem vindo, ${nome}!`)
- .then e .catch são encadeados — não repete o nome da variável
- resolve() não imprime nada — só entrega o valor pro .then

## Analogia

É como pedir uma pizza — você recebe um número do pedido (Promise)
e continua fazendo outras coisas. Quando ficar pronto (.then),
te chamam. Se acabar o ingrediente (.catch), te avisam do erro.

## Frase para entrevista

"Promise é um objeto que representa o resultado futuro de uma operação
assíncrona. Pode ser resolvida com .then no sucesso ou .catch no erro."
