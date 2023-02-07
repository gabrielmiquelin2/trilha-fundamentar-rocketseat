//Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

console.log(Number ("9") + 5)
//função que tranforma o 9 em number ao invés de string



//transformando string em number
let string = "311"
console.log(Number(string))

//transformando number em string
let number = 311
consol.log(string(number))


//Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

let word = "VascoDaGama"
console.log(word.length)

let number2 = 239129
console.log(string(number).length)


//Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

let number3 = 318293193191
console.log(number3.toFixed(3).replace(".",","))//trocando (.) por (,)


//Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.

let mundo = "programar as vezes stressa"
console.log(mundo.toUpperCase().toLowerCase())


//Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.


let frase = "Eu vou ser um programador front end"
let meuArray = frase.split("    ")

let fraseWithUnderScore = meuArray.join("_")
console.log(fraseWithUnderScore)


//Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

let frases = "Eu vou ser foda"
console.log(frase.includes("ser"))



//Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

let myArray = new Array ("a","b","c","d")
console.log(myArray)