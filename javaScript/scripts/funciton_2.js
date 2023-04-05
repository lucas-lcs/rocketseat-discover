/*
Também é possível declarar funções dentro de variáveis, desta maneira: 
const variavel = function() {}. Uma parte importante de funções são os parâmetros, 
que são similares variáveis que funcionam para colocar dados em funções, eles são declarados 
junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.
*/


// function expression 
// functions aninymos
const sum = function(number1, number2) /* paramenters */{
    // console.log(number1 + number2)
    let total = number1 + number2 // sempre criar com o let porque sem ele funciona fora do escolo mas pode gerar bugs de referencias
    return total
}

let number1 = 4 // nesse caso sempre será pego os argumentos dentro da function
let number2 = 4 // para pegar fora temos que passar o paramentros dentro da function como no exemplo abaixo

console.log(sum)
sum(2, 3) // arguments
sum(4, 5)
sum(number1, number2)


// 2· exemplo 

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)

// como não teve o return dentro da function, foi realizado o console log mas quando chegou na interpolação 
// retornou undefined porque não colocamo o retur para retonar o valor da soma, sempre que quisermos um retorno 
// precisamos especificar na nossa function, vamos realizar! 
console.log(`a soma total é ${sum(number1, number2)}`)



// Ex. 3

// function é um liquidificador 

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + ' ' + 'e' + ' ' + fruta2
}

const copo = fazerSuco('banana', 'maça')
console.log(copo)


// Ex. 4 

// Function scope
// Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, 
// são apenas modificados e persistem no escopo da função.

let subject 

function creatThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(creatThink(subject))
console.log(subject)




