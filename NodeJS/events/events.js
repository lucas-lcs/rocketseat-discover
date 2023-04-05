// // é um classe do nodejs que tem algumas opções para ser utilizado 

// const { EventEmitter} = require('events')

// const ev = new EventEmitter()

// ev.on('saySomething', (message) => { //on escuta toas as vezes || ou 'once' para escutar uma unica vez 
//     console.log('Eu ouvi você: ', message)
// })

// ev.emit('saySomething', 'Lucas Henrique')
// ev.emit('saySomething', 'Sheila Alves')


const util  = require('util')
const { EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

util.inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('Help', () => console.log(`Eu! o ${chapolin.name} Colorado!`))

console.log('Oh! E agora, quem poderá me defender?')

chapolin.emit('Help')






