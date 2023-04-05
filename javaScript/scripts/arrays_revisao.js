/*
Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: const animals = [ "Lion", "Monkey" ], para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: console.log(animals[0]). Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: animals.length.

*/

//array

const animals = [
    'Lion',
    'Monkey', 
    'Cat',
    {
        name: "Lucas",
        age: 3
    }
]


//acessando valores

console.log(animals)
console.log(animals[0])
console.log(animals.length)
console.log(animals[3].name)
console.log(animals[3].age)
console.log(animals[1].age) // undefined