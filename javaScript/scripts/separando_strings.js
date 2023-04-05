/*
Para separar um texto por espaços, pode-se usar o método split(" "), 
que transforma o texto em um array de strings baseado no argumento, 
que no caso são os espaços. Para juntar esse array é possível usar o 
método join('"), que juntaria essas palavras sem nenhum separador, porém 
colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

*/

// MANIPULANDO STRINGS E ARRAYS

// Separe um texto que contem espaços, em um novo array onde casa texto é uma posição do array. 
// Depois disso, transforme o array em um texto e onde eram espaços, coloque_


let phase = 'Eu quero viver o Amor!'

let myArray = phase.split(' ')

console.log(myArray)

let phaseWithUnderscore = myArray.join('_')

console.log(phaseWithUnderscore.toLocaleUpperCase())






