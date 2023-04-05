/*
Uma callback function é uma função que está sendo passada para outra função como parâmetro.

*/


// function sayMayName () {
//     console.log('antes de executar a fuction callback')

//     function name() {
//         console.log('Estou dentro do callback')
//     }

//     name()

//     console.log('depois de executar o callback')
// }

// sayMayName()

function sayMayName (name) {
    console.log('antes de executar a fuction callback')

  name()

    console.log('depois de executar o callback')
}

sayMayName( 
    () => {
        console.log('Estou dentro do callback')
    }
)