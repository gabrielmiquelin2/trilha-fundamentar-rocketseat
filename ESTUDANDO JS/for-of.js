//FOR..OF
// Sintaxe
// for (variavel of iteravel) {
//   declaração
// 


let name = "Gabriel"
let names = ["João", "Paulo", "Maria"]

for(let name of names){//pegue uma letra do nome
  console.log(name)
}

let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}