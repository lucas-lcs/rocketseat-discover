
class Parafuso { // superclass - abstrata
    constructor() {
        if(this.constructor === Parafuso)
        throw new Error('Class abstrata não pode ser instânciada')
    }
    get tipo() {
        throw new Error ('Método "get tipo()" precisa ser imprementado')
    }
}

class Fenda extends Parafuso { 
    constructor() { super()  }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor(){ super() } 
    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {}


//criar e usarN
//new Parafuso() // classe abstrata não pod ser intânciada
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo)