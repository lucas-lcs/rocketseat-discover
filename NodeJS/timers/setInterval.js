// Vai rodar uma função depois de x millisegundos
// Irá rodar a função N vezes. Infinita vezes vai rodar
const timeOut = 1000
const checking  = () => console.log('Checking!')

console.log(setInterval(checking, timeOut))
