//EXERCICIO SOLO:

// Você tem um endereço base com rua e numero.
// Usando spread, crie um enderecoCompleto que mantenha
// os dados do enderecoBase e adicione cidade e cep.

// const enderecoBase = { rua: "José Clementino", numero: "120" }

// const enderecoCompleto = { ...enderecoBase, cep: 81130290, cidade: "Curitiba" }
// console.log(enderecoCompleto)

//EXERCICIO SOLO COMPLEMENTAR:

// Você tem dois arrays de contatos e um objeto de usuário.
// 1. Una os dois arrays em um único array chamado todosContatos
// 2. Crie um usuarioCompleto com os dados do usuario + plano: "premium"
//    mas sobrescrevendo a idade para 26

const contatos = ["Gabriel", "Maria", "Juca"]
const contato = ["Simone", "Gabriela"]

const todosContatos = [...contatos, ...contato]

const usuarios = { nome: "Gabriel", idade: 25 }
const usuarioCompleto = { ...usuarios, idade: 26, plano: "premium" }

console.log(usuarioCompleto)
console.log(todosContatos)