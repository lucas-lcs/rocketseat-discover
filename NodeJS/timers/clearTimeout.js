// Vai cancelar um timeout

const timeOut = 3000
const finished = () => console.log('DONE!')

// aqui retorna um objeto timout onde se guardarmo em um variavel podemso cancelar a ação de espera 

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)