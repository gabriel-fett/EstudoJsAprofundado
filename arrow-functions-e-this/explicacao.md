# Arrow Function vs Function Normal

## A diferença principal: o `this`

| | `function` normal | `arrow function` |
|---|---|---|
| Tem `this` próprio? | ✅ Sim | ❌ Não |
| O `this` depende de... | **quem chamou** (tempo de chamada) | **onde foi escrita** (tempo de escrita) |

---

## Regra de ouro para `function` normal

> Olha quem está **antes do ponto** na chamada. Esse é o `this`.

```js
pessoa.falar()  // this = pessoa
fn()            // sem dono → this = global (undefined no strict mode)
```

---

## Regra de ouro para `arrow function`

> Ela não tem crachá próprio. Herda o `this` de onde foi **escrita**.
> Não importa quem a chamou — ela só tem olhos pro contexto de origem.

```js
const timer = {
  nome: "Timer",

  iniciar: function() {
    setTimeout(() => {
      console.log(this.nome); // ✅ "Timer"
      // arrow foi escrita dentro de iniciar
      // this de iniciar = timer → herda timer
    }, 1000);
  }
};
```

---

## O problema clássico: função arrancada do objeto

```js
const pessoa = {
  nome: "Gabriel",
  falar: function() {
    console.log(this.nome);
  }
};

pessoa.falar();       // ✅ "Gabriel" — this = pessoa (tem dono antes do ponto)

const fn = pessoa.falar;
fn();                 // ❌ undefined — função arrancada do objeto, sem dono
```

---

## O problema clássico: callback perdendo o `this`

```js
const botao = {
  texto: "Clica aqui",

  // ❌ function normal no callback → this = quem chamou (document)
  initErrado: function() {
    document.addEventListener("click", function() {
      console.log(this.texto); // undefined — this virou document
    });
  },

  // ✅ arrow no callback → herda o this do initCerto (botao)
  initCerto: function() {
    document.addEventListener("click", () => {
      console.log(this.texto); // "Clica aqui"
    });
  }
};
```

---

## Quando usar cada uma?

**Use arrow function quando:**
- For um callback (`setTimeout`, `addEventListener`, `map`, `filter`, `reduce`)
- Quiser manter o `this` do contexto externo
- A função for curta e não precisar de `this` próprio

**Use function normal quando:**
- For um método de objeto (você quer que `this` seja o objeto)
- For um construtor com `new`
- Precisar que o `this` seja dinâmico (mude conforme quem chama)

---

## Resumo final

```js
// ❌ arrow como método — perde o this do objeto
const pessoa = {
  nome: "Gabriel",
  falar: () => console.log(this.nome) // undefined
};

// ✅ function como método — this = objeto
const pessoa = {
  nome: "Gabriel",
  falar: function() { console.log(this.nome); } // "Gabriel"
};

// ✅ arrow como callback — mantém o this externo
function iniciar() {
  setTimeout(() => {
    console.log(this); // herda o this de iniciar
  }, 1000);
}
```

> **Frase pra fixar:**
> Arrow function: `this` definido na **escrita**
> Function normal: `this` definido na **chamada**