/*
O JavaScript possui function hoisting, permitindo que uma função seja declarada 
depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. 
Porém isso não acontece dentro de variáveis.

*/

// sayMayName()

// function sayMayName() {
//     console.log('Lucas')
// }


// undefined

//const sayMayName // isso não é uma função por isso que quando acontece o hoisting da o erro.

sayMayName()

const sayMayName = function() {
    console.log('Lucas')
}