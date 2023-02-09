// A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

//NEW = CRIAR UM NOVO OBJETO { }

// Um exemplo de seu uso é:

let date = new Date('2020-12-01')
console.log(date.__proto__)


//OUTRO EXEMPLO

let nome = new String ("Gabriel")
nome.sobreNome = "Miquelin"
let age = new number (27)
console.log(nome.sobreNome,  age)