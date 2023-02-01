let name = 'Gabriel'

console.log(typeof name)

//AGRUPAMENTO DE DECLARAÇÔES
let age, isHuman

age = 17
isHuman = true

//OU POSSO FAZER DESTA FORMA
// let age = 17
// let isHuman = true

//multiplos argumentos no console
console.log(name,age,isHuman)

//Interpolando valores com template literals  
console.log(`O ${name} tém ${age} anos` )

//OBJECT

let pessoa = {
  name: 'Rangel',
  age: 39,
  weight: 90,//peso
  isAdmin: true
 }

 console.log(`${pessoa.name} Tém ${pessoa.age} anos`)

 


 //ARRAY 

 let animals = [
   'Lion',
   'Cat',
      {
        name: 'Dog Lucky',
        age:3
      }
 ]
//Acessando valores dentro do array
 console.log(animals[2].name)