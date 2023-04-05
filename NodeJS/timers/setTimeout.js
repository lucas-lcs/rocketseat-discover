// Vai rodar uma função depois de x millisegundos

const timeOut = 3000
const finished = () => console.log('DONE!')

setTimeout(finished, timeOut)


console.log('esse vaio primeiro que o callback')