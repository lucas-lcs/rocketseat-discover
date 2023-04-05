/*
Para verificar se um texto possui uma palavra específica, podemos usar o método includes(),
passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar 
a palavra, e falso se não, lembrando sempre que o método é case sensitive.

*/

// MANIPULANDO STRINGS E ARRAYS

//  verificar se o texto contém Amor


let phase = 'Eu quero viver Amor!'

console.log(phase.includes('Amor'))// true

let phase1 = 'Eu quero viver!'

console.log(phase1.includes('Amor'))// false

let phase3 = 'Eu quero viver amor!'

console.log(phase3.includes('Amor'))//false









