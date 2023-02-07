//O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.
//Prototipos ou seja ALGO QUE FOI CRIADO ANTES


//Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros. Neste artigo, explicamos como as cadeias de protótipos funcionam e observamos como a propriedade prototype pode ser usada para adicionar métodos aos construtores existentes.

function Person(first, last, age, gender, interests) {

  // property and method definitions
  this.first = first;
  this.last = last;
//...
}

console.log(Person)