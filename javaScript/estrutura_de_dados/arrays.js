const pilotos = ['Senna', 'Prost', 'Shumacher', 'Hameanton']

// a indexação (index) começa sempre pelo 0

console.log(pilotos[0])

console.log(pilotos[3])

//Acessando o tamanha do array
console.log(pilotos.length)


// interável 
for (let piloto of pilotos) {
    console.log(piloto)
}

// função para adicionar elemento dentro do array
pilotos.push("Alves")
console.log(pilotos)


// função para encontrar elemento dentro do array 

const senna = pilotos.find(piloto => piloto === 'Alves' )
console.log(senna)


// Deletando um elemento

pilotos.splice(1,1)
console.log(pilotos)