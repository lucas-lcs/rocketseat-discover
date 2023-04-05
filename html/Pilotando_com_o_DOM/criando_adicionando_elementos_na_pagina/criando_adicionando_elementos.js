
// CreateElement
// criamos uma div porem para exibir precisamos fazer o passo 2 

const div = document.createElement('div')
div.innerText = 'Adicinando uma div no HTML'


// append prepend 
const  body = document.querySelector('body')

body.append(div)// adicionando a div depois do body 

body.prepend(div)// adicionando a div antes do body 