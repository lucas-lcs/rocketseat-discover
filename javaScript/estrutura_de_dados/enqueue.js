//modelando os dados 
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}


//utilizando os dados

const fila = new Queue()

fila.enqueue('Lucas')
fila.enqueue('Alves')
fila.enqueue('Henrique')

fila.dequeue()
fila.dequeue()
fila.dequeue()