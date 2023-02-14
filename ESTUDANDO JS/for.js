//FOR = PARA
//BREAK - PARA A EXECUÇÂO DO LOOP
//CONTINUE - PULA A EXECUÇÂO DO MOMENTO
// A estrutura de repetição for tem a seguinte sintaxe:
// for(inicialização de uma variável; condição de continuação para o loop; expressão final)

// for (let i = 0; i < 10; i++){
//   console.log(i)
// } 

for (let i = 10; i > 0; i -- ){
  if (i === 5){
    continue;
  }
  console.log(i)
}