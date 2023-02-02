//Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

//Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

//function anônima - quando não tém nada dentro das aspas()
let somar = function (number1, number2){
 let total = number1 + number2
  return total
}

let nu1 = 34
let nu2 = 25
somar(nu1, nu2)//argumentos

console.log(`O número 1 é ${nu1}`)
console.log(`O número 2 é ${nu2}`)
console.log(`A soma é ${somar(nu1,nu2)}`)
