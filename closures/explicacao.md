Closure é uma função que lembra das variáveis do escopo onde nasceu, mesmo depois que esse escopo encerrou.

A analogia da mochila:
Imagina que criarContador é uma fábrica de mochilas. Quando você chama ela, ela monta uma mochila com o count = 0 lá dentro e entrega pra você.
Depois que a fábrica fechou, a mochila continua com você. Toda vez que você chama contador(), você abre essa mochila, pega o count, soma 1, coloca de volta e fecha. A mochila nunca some enquanto você a tiver.
Isso é a closure — a função carrega a mochila com ela pra onde for.

=======================================

## O que é uma Closure?

Closure é uma função que lembra das variáveis do escopo onde nasceu,
mesmo depois que esse escopo encerrou.

## A analogia da mochila

Imagina que a função de fora é uma fábrica de mochilas.
Quando você a chama, ela monta uma mochila com as variáveis lá dentro
e entrega pra você. Mesmo depois que a fábrica fechou, a mochila
continua com você. Toda vez que você chama a função de dentro, você
abre essa mochila, usa o valor, e fecha de novo.

## Exemplo básico

function criarContador() {
let count = 0 // nasce aqui dentro

return function() { // essa função É a closure
count++ // lembra do count toda vez
console.log(count)
}
}

const contador = criarContador()
contador() // 1
contador() // 2
contador() // 3 — count não resetou!

## Por que o count não volta pra 0?

Porque a função retornada ainda tem uma referência ao count na memória.
Enquanto contador existir, o count não some.

## Parâmetro vs Variável — quando usar cada um?

Pergunta chave: "Quem fornece esse valor?"

- Quem chama a função define → use parâmetro
- A própria função define → use let/const dentro dela

Exemplos:
criarSaudacao("Gabriel") // "Gabriel" vem de fora → parâmetro
let count = 0 // count nasce dentro → variável

## Regra importante

Se a função precisa devolver um valor, precisa de return.
console.log() apenas imprime. return devolve.

## Onde closure aparece no front-end?

- Contadores
- Funções que guardam estado entre chamadas
- Debounce (atrasa execução de função)
- Composables no Vue 3 (ex: useCounter)
