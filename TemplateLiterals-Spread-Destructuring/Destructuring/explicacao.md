# Destructuring

## O que é Destructuring?

Destructuring é uma forma de **extrair valores** de objetos ou arrays e atribuí-los a variáveis de forma direta e limpa,
sem precisar acessar cada propriedade manualmente.

---

## A analogia da caixa

Imagina que você tem uma caixa com vários itens dentro.
Sem destructuring, você abre a caixa e retira item por item pelo nome da caixa.
Com destructuring, você abre a caixa e já nomeia cada item de uma vez só.

```js
// Sem destructuring — trabalhoso
const pessoa = { nome: "Gabriel", idade: 25, cidade: "Curitiba" };
const nome = pessoa.nome;
const idade = pessoa.idade;

// Com destructuring — direto
const { nome, idade } = pessoa;
// "Vai em pessoa e me traz nome e idade"
// O objeto pessoa continua intacto com todos os valores
```

---

## Destructuring de Objeto

```js
// Extraindo propriedades de um objeto
const carro = { marca: "Honda", ano: 2020, cor: "preto" };
const { marca, cor } = carro;

console.log(marca); // "Honda"
console.log(cor);   // "preto"
```

---

## Destructuring de Array

No array, o que importa é a **posição** — o nome da variável é livre.

```js
const numeros = [10, 20, 30, 40];
const [primeiro, segundo] = numeros;

console.log(primeiro); // 10  → posição 0
console.log(segundo);  // 20  → posição 1
```

Para pular posições, use vírgulas:

```js
const [, , terceiro, quarto] = numeros;

console.log(terceiro); // 30
console.log(quarto);   // 40
// Cada vírgula pula uma posição
```

---

## Destructuring direto no parâmetro de função

Em vez de receber o objeto inteiro e acessar depois, você já extrai na "porta de entrada" da função.

```js
const usuario = { nome: "Gabriel", plano: "premium", ativo: true };

// Sem destructuring no parâmetro
function exibirUsuario(usuario) {
  console.log(usuario.nome);  // precisa do "usuario." toda vez
  console.log(usuario.plano);
}

// Com destructuring no parâmetro — mais limpo
function exibirUsuario({ nome, plano }) {
  console.log(`${nome} - ${plano}`); // já chegou extraído
}

exibirUsuario(usuario); // "Gabriel - premium"
// O objeto usuario completo é passado, mas a função já pega
// só nome e plano na entrada — como um segurança que separa
// o que você precisa antes de entrar
```

---

## Dúvidas que surgiram

### "Quando faço destructuring, estou limitando o objeto original?"

Não. O objeto continua intacto. Você está apenas criando novas variáveis que buscam valores dentro dele.

```js
const pessoa = { nome: "Gabriel", idade: 25, cidade: "Curitiba" };
const { nome, idade } = pessoa;

console.log(pessoa); // { nome: "Gabriel", idade: 25, cidade: "Curitiba" } → intacto!
console.log(nome);   // "Gabriel"
console.log(idade);  // 25
```

### "Por que destructuring de array é confuso?"

Porque depende da posição, não do nome. Se os dados mudarem de ordem, o destructuring quebra.
Por isso destructuring de **objeto** é muito mais usado no dia a dia — você busca pelo nome da propriedade, não pela posição.

### "Isso tem relação com props no Vue?"

Sim! Quando um componente Vue recebe props, você pode desestruturá-las direto no parâmetro — exatamente como no exemplo da função acima. Você vai ver isso na prática quando chegarmos no Vue.