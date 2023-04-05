/*
Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, 
todos com as mesmas características que são criadas na função, usando a palavra reservada this para 
se referir ao objeto sendo criado, por exemplo:

function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")

*/

// Functions constructor
// Expressão new 
// Criar um novo object
// this keyword

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}


const lucas = new Person('Lucas')
const joão = new Person('João')


console.log(lucas.walk())
console.log(joão.walk())

