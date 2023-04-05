// nextSibling nextElementSibling
//previousSibling previousSibling


const el = document.querySelector('head')

console.log(el.nextSibling)// pega os espaços
console.log(el.nextElementSibling)// não pega o espaço

const element = document.querySelector('p')

console.log(element.previousSibling)// pega os espaços
console.log(element.previousElementSibling)// não pega o espaço
