/*

Precedência dos operadores

*/

// Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

// * grouping                      ( )
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           && 
// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %= 



// OBS: 0 == false e true = 1 sempre vai ser assim! 


console.log(2 + 5 * 10) // 52 
console.log((2 + 5) * 10)// 70
console.log(3 > 2 > 1) // False por que true é igual a 1 e não maior
console.log(3 > 2 && 2 > 1) // True porque true && true é igual a true! 
 




