// manipulando os atributos

const header = document.querySelector('head')

header.setAttribute('id', 'header') // adicionando o id no header que não tinha antes

const headerId = document.querySelector('#header')// pegando o id adicionado

console.log(header, headerId)

console.log(headerId.getAttribute('class'))// pegando o atributo do header


console.log(headerId.removeAttribute('id'))// removendo os atributos adicionados 

console.log(headerId.removeAttribute('class'))// removendo tbm! 

console.log(header.setAttribute('class', 'bg header'))// adcionando as classes! 