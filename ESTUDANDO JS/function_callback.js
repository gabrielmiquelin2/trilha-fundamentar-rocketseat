//Uma callback function é uma função que está sendo passada para outra função como parâmetro.

//MANEIRA MAIS CONHECIDADE DE FAZER ISSO

// function sayMyName (){
//    console.log("Antes de executar a functio callback")
   
//     function name (){
//        console.log("Estou em callback")
//     }
//     name()

//     console.log("Depois de executar a callback")
// }

// sayMyName()


//SEGUNDA MANEIRA UTILIZANDO ARROW FUNCTION ou seja resumir a função

function sayMyName (name){
  console.log("Antes de executar a functio callback")

  name()//chamei a função

  console.log("Depois de executar a callback")
}

sayMyName (
   ()  => {
    console.log("Estou em callback")
   }
)