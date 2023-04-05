/*

Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, 
são dependentes de condições e podem entregar valores diferentes com base nelas.

*/

// Funciona da seguinte forma;

// condição ? valor1 : valor2
// Exemplo de uso:

// Café da manhã top
let pao = false
let queijo = true

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

const niceBreakfast1 = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast1)

const niceBreakfast2 = !pao && !queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast2)


// Maior que 18 


let age = 32

const canDriver = age >= '18' ? "can driver" : "Can't driver"
console.log(canDriver)



