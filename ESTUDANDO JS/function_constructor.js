//Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

function Person (name){
   this.name = name
   this.andar = function(){
    return this.name + " está andando"
   }
}
const gabriel = new Person ("Gabriel")
const luca = new Person ("Luca")
console.log(gabriel.andar())
console.log(luca.andar())