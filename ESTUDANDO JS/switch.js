//Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.

function calculadora (number1, operador, number2){
  let resultado = 0

  switch(operador){
    case "+":
      resultado = number1 + number2
      break

    case "-":
        resultado = number1 - number2
        break
    
    case "*":
         resultado = number1 * number2
         break 
    case "/":
         resultado = number1 / number2
         break      
    default: 
        console.log("Não Tém")     
        break
  }
  return resultado
}

console.log(calculadora(5, '*' ,5))