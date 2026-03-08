Spread Operator ...
O que é?
O Spread Operator (...) pega tudo que está dentro de um array ou objeto e espalha para fora. É como abrir um pacote e jogar o conteúdo na mesa.

Com Arrays — juntar e combinar
js// Juntar dois arrays
const frutas = ["maçã", "banana"];
const verduras = ["alface", "tomate"];

const mercado = [...frutas, ...verduras];
// ["maçã", "banana", "alface", "tomate"]

// Inserir elemento no meio
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, 10, ...b];
// [1, 2, 3, 10, 4, 5, 6]

Com Objetos — copiar e adicionar
js// Copiar e adicionar propriedades
const usuario = { nome: "Gabriel", idade: 25 };
const usuarioAtualizado = { ...usuario, cidade: "Curitiba" };
// { nome: "Gabriel", idade: 25, cidade: "Curitiba" }

Sobrescrever propriedade — a ordem importa!
jsconst config = { tema: "dark", fonte: 14 };

const novaConfig = { ...config, fonte: 18 };
// { tema: "dark", fonte: 18 }
// fonte: 18 veio DEPOIS do spread → sobrescreveu o 14

⚠️ Se você colocar fonte: 18 ANTES do spread, o spread sobrescreve de volta para 14. Sempre coloque o que quer manter por último.


Resumo rápido
SituaçãoComo usarJuntar arrays[...array1, ...array2]Copiar objeto e adicionar{ ...obj, novaChave: valor }Sobrescrever propriedade{ ...obj, chaveExistente: novoValor }