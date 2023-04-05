

//Modelo Estrutura

let altura = 50 
let largura = 60

function calcularArea(){
    return altura * largura
}

let area = calcularArea()
console.log(area)

// Modelo Encapsulamento Orientado a objeto 

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    get area(){
        return this.#calcularArea() // o # ser para não deixar visivel fora do bloco
    }

    #calcularArea(){
        return this.altura * this.largura
    }
} 

let poligono = new Poligono(50, 60)
//console.log(poligono.#calcularArea())// invisivel 
console.log(poligono.area)// area nao pode ser função! 