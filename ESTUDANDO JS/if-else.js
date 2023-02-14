// //Como escreve o IF
//   if (){
//  
//   }else{
// 
//   }

//PRIMEIRO JEITO DE FAZER
// let temperature = 37.5

// if (temperature >= 37.5){
//   console.log("Febre alta ")
// }else if (temperature < 37. && temperature >= 37){
//   console.log("Febre moderada")
// }else{
//   console.log("Saudável")
// }

//SEGUNDO JEITO DE FAZER (DECLARANDO VARIÀVEIS)
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature){
  console.log("Febre alta ")
}else if (mediumTemperature){
  console.log("Febre moderada")
}else{
  console.log("Saudável")
}

