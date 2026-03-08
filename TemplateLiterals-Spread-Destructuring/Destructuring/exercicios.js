// const carro = { marca: "Honda", ano: 2020, cor: "preto" };
// const { marca, cor } = carro;

// console.log(marca);
// console.log(cor);

// COMO FOI DENTRO DE UM OBJETO REPARA-SE QUE DA PARA PEGAR QUALQUER ORDEM, COMO NESSE CASO, MARACA E COR. EM ARRAYS É DIFERENTE..
// EM ARRAYS LOGO ABAIXO:

// const numeros = [10, 20, 30, 40];
// const [primeiro, segundo] = numeros;

// console.log(primeiro);
// console.log(segundo);

// AQUI EM ARRAYS, ELE SEMPRE VAI VER O VALOR 0, 1, 2, 3.. E POR ASSIM EM DIANTE.
// SE EU QUISER PEGAR O VALOR 30, E DEPOIS O 40, EU TERIA QUE PULAR COM VIRGULAS AS "CASAS", EXEMPLO ABAIXO:

// const numeros = [10, 20, 30, 40];

// const [, , terceiro, quarto] = numeros;

// console.log(terceiro);
// console.log(quarto);   


// EM UM NIVEL MAIS DIFICIL:

const usuario = { nome: "Gabriel", plano: "premium", ativo: true };

function exibirUsuario({ nome, plano }) {
    console.log(`${nome} - ${plano}`);
}

exibirUsuario(usuario);

// COMO ELE ESTA DENTRO DE UMA ARRAY É MAIS FACIL DE USARMOS FUNCTION.
//