// Escreve um código que faça tudo isso:
// Esse exercicio é feito sem ajudas, é com o conhecimento e aprendizado dos exercicios e conceito de Hoisting

// Chama uma função apresentar antes de declará-la
// A função deve imprimir "Meu nome é Gabriel"
// Tenta chamar uma arrow function despedir antes de declará-la
// Declara despedir depois e chama novamente — dessa vez funciona

apresentar()
function apresentar() {
    console.log("Meu nome é Gabriel")
}

// despedir()
// const despedir = () => {
//     console.log("despedir")
// }

const despedir = () => {
    console.log("despedir")
}
despedir()