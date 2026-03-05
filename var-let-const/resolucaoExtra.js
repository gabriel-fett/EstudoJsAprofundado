// Desafio 2
// // ESSE DESAFIO É FEITO INTEIRAMENTE SEM AJUDA DE IA OU OUTRAS AJUDAS
// Escreve um código que faça tudo isso:

// Cria um objeto jogador com nome, pontos (começando em 0) e ativo (boolean true)
// Cria uma variável status com let que diz "Jogador inativo"
// Se o jogador estiver ativo, muda status para "Jogador ativo"
// Adiciona 10 pontos ao jogador
// Imprime status e pontos no console

const jogador = { nome: "Gabriel", pontos: 0, ativo: true }

jogador.pontos += 10

let statusJogador = "jogador inativo"

if (jogador.ativo) {
    statusJogador = "jogador ativo"
}
console.log("Os pontos são", jogador.pontos, "e o jogador está", statusJogador)