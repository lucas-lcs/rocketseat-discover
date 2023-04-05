/*
O Scope ou Escopo determina a visibilidade de uma variável em um código, 
e para entender scope precisamos primeiramente entender block statement, 
que é o código presente dentro de chaves. O escopo do var é global, ou seja, 
uma variável declarada com var poderá ser usada em todo o código.


var é global e poderá funcionar fora de um escopo de bloco

console.log('> existe x antes de bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x) 


Diferentemente de var, const e let são variáveis com escopo local, ou seja, 
só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. 
Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

const e let são locais e só funcionan no escopo onde foi criada 

console.log('> existe y antes de bloco? ', y)

{
    let x = 0
}

console.log('> existe y depois do bloco? ', y) 

*/

