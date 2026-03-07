## Event Loop

## O que é o Event Loop?

O JavaScript é single thread — roda uma coisa de cada vez.
O Event Loop é o mecanismo que permite lidar com tarefas demoradas
sem travar a interface.

## As 3 áreas do JS

- **Call Stack** → fila principal onde o código roda
- **Web APIs** → área do navegador que cuida de tarefas com tempo
  (setTimeout, fetch, eventos de clique)
- **Callback Queue** → fila de espera pra voltar pro Call Stack

## Como funciona na prática

1. Código síncrono entra na Call Stack e roda na ordem
2. Código assíncrono (setTimeout, fetch) vai pra Web API
3. JS continua rodando o resto sem esperar
4. Quando a Call Stack fica vazia, o Event Loop pega
   o que está na fila e manda rodar

## Síncrono vs Assíncrono

- **Síncrono** → roda agora, na ordem, sem esperar
  Exemplo: console.log, operações matemáticas
- **Assíncrono** → vai pra fila, espera, roda depois
  Exemplo: setTimeout, fetch, eventos

## Exemplo real

console.log("Página carregou") // 1. roda agora
setTimeout(() => {
console.log("Dados chegaram") // 3. roda por último
}, 3000)
console.log("Menu apareceu") // 2. roda agora

// Resultado: página e menu aparecem imediatamente
// Dados chegam 3 segundos depois — sem travar a interface

## Onde uso no dia a dia?

- Debounce → espera usuário parar de digitar antes de buscar
- Mensagens temporárias → some o alerta depois de X segundos
- Simulação de loading em desenvolvimento
- O conceito por trás do fetch + Promises (próximo tópico)

## Frase para entrevista

"O JavaScript é single thread — roda uma coisa de cada vez.
Código síncrono roda na ordem. Código assíncrono vai pra fila
e só roda quando a Call Stack estiver vazia."
