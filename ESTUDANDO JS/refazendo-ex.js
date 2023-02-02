// //1 Declare uma variável de nome weight 
// let weight

// //2 Que tipo de dado é a variavel acima?
// console.log(typeof weight) //INDEFINIDO
// /*3 Declare uma variavel e atribua valores para cada um dos dados:
//   name: string
//   age: number (integer)
//   stars: number (float)
//   isSubscribed (boolean)
// */
// let age = 18
// let stars = 9.1
// let isSubscribed = false
// let name = "Biel"

//   console.log(typeof isSubscribed)

// //4 A variavel student abaixo é de que tipo de dado?
// student ={

// }
//4.1 atribua a ela as mesmas propriedades e valores do exercício 3
student = {
  name: "Biel",
  age:18,
  stars: 9.1,
  isSubscribed: false
}

// //4.2 Mostre no console com templete literals
// console.log(`O estudante ${name} de ${age} anos de idade, tém ${stars} estrelas`)

//5 Declare uma variavel do tipo array, de nome STUDENTS e atribua a ela nenhum valor
   let students = [

   ]
//6 Reatribua valor para a variável acima, colocando dentro dela o objeto student da questa 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
students = [
  student
]
console.log(student)

//7 Coloque no console o valor da posição zero do array acima
console.log(students[0])

//8 Crie um novo student e coloque na posição 1 do Arraya students

const luca = {
  name: "Luca",
  weight: 99,
  isSubscribed:true
}

//PRIMEIRO JEITO DE FAZER
students = {
   student,luca
}
console.log(students)

//SEGUNDO JEITO DE SABER
students[1] = luca
console.log(students)