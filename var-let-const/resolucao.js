// Desafio
// ESSE DESAFIO É FEITO INTEIRAMENTE SEM AJUDA DE IA OU OUTRAS AJUDAS
// Escreve um código que faça tudo isso:

// Cria um objeto carro com marca, ano e ligado (boolean false) usando const
// Liga o carro mudando ligado para true
// Cria uma variável mensagem com let que diz "Carro desligado"
// Se o carro estiver ligado, muda mensagem para "Carro ligado"
// Imprime mensagem no console


const carro = { marca: "Chevrolet", ano: 2007, ligado: false }

carro.ligado = true

let Carro = "Carro desligado"
if (carro.ligado) {
    Carro = "Carro ligado"
}

console.log(Carro)