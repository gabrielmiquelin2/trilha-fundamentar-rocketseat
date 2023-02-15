//FOR IN - CRIA UM LOOP ENCIMA DE UM OBJETO

let person = {
  name: "Gabriel",
  age: 30,
  weight: 71
}

for (let property in person){//No obj pegue a propriedade
  console.log(property)
  // console.log(person["name"])//pode usar o .name
  console.log(person[property])
}