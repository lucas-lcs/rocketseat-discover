// childNodes children 
// firstChild firstElementChild
// lastChild lastElementChild

const el = document.querySelector('body')

console.log(el.childNodes)// pega os espaços
console.log(el.children)// não pega os espaços


const ele = document.querySelector('body')

console.log(ele.firstChild)// pega os espaços
console.log(ele.firstElementChild)// não pega os espaços


const element = document.querySelector('body')

console.log(element.lastChild)//não pega os espaços 
console.log(element.lastElementChild)// não pega os espaços
