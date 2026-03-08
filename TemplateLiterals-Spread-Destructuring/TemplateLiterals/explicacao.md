# Dia 5 — Template Literals

## O que são Template Literals?

Template Literals são uma forma moderna de criar strings em JavaScript usando **crases** (`` ` ``).
Elas permitem misturar texto com variáveis e expressões JS de forma limpa, sem precisar de concatenação com `+`.

---

## Sintaxe

```js
`Texto normal ${variavel ou expressão JS} mais texto`
```

---

## Exemplos

### Exemplo 1 — Variáveis simples

```js
const nome = "Gabriel";
const cargo = "Dev";

// Jeito antigo (concatenação)
console.log("Olá, " + nome + "! Você é " + cargo);

// Template literal
console.log(`Olá, ${nome}! Você é ${cargo}`);

// Resultado: "Olá, Gabriel! Você é Dev"
```

---

### Exemplo 2 — Expressões dentro do `${}`

```js
const preco = 49.9;
const desconto = 10;

console.log(`Preço final: R$ ${preco - desconto}`);
// Resultado: "Preço final: R$ 39.9"
```

> O `${}` executa qualquer código JS válido: contas, funções, ternários etc.

---

### Exemplo 3 — Operador ternário dentro do `${}`

```js
const ativo = false;

console.log(`Status: ${ativo ? "Online" : "Offline"}`);
// Resultado: "Status: Offline"
```

---

## Dúvidas que surgiram

### "As crases são o que permite a subtração dentro da string?"

Não. As crases criam o template literal (texto moderno), mas quem permite executar JS dentro da string é o `${}`.

```js
console.log(`10 - 5`); // "10 - 5"  → texto puro, sem executar
console.log(`${10 - 5}`); // 5         → JS executado pelo ${}
```

---

### "Sempre que for usar JS no console, preciso de crases?"

Não. Crases só são necessárias quando você quer **misturar texto com JS**.
Se for só JS puro, vai direto:

```js
const preco = 100;
const desconto = 20;

// Só JS — sem crases necessárias
console.log(preco - desconto); // 80

// Texto + JS — precisa de crases
console.log(`Preço final: ${preco - desconto}`); // "Preço final: 80"
```

**Regra rápida:** tem texto junto? → usa crases. Só valor/cálculo? → vai direto.

---

### "Por que em HTML/JSX às vezes é `{}` e outras vezes `${}`?"

São contextos diferentes:

```js
// Template literal (string JS) → usa ${}
const nome = "Gabriel";
console.log(`Olá, ${nome}`);
```

```jsx
// JSX (React) → usa apenas {}
const nome = "Gabriel";
return <h1>Olá, {nome}</h1>;
```

O JSX já sabe que está num ambiente especial — o `{}` sozinho já significa "entra JS aqui".
O `$` é exclusivo das crases (template literals).

---

### "O que é o operador ternário (`?`)?"

É um `if/else` comprimido em uma linha:

```js
condição ? "se verdadeiro" : "se falso";
```

```js
const ativo = false;
console.log(ativo ? "Online" : "Offline"); // "Offline"

// Equivalente a:
if (ativo) {
  console.log("Online");
} else {
  console.log("Offline");
}
```

---

## Exercício feito

```js
const produto = "Notebook";
const preco = 3500;
const emEstoque = true;

console.log(
  `Produto: ${produto} preço: ${preco} Disponivel: ${emEstoque ? "sim" : "não"}`,
);
// Resultado: "Produto: Notebook preço: 3500 Disponivel: sim"
```
