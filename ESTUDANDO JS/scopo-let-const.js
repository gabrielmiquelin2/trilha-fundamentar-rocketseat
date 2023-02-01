// Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

//Scopo seria uma caixa representado pelas {} onde o js só vai ler oq esstá dentro e o que está fora ele vai ler com o que estiver fora também
let y = 3

{
  console.log("> Existe y antes do bloco?", y)
  let y = 0
}

console.log("Existe v depois do bloco?", y)