
const div = document.createElement('div')
div.innerText = 'Adicionando uma div no HTML'


// insertBefore

const body = document.querySelector('body')
const script = body.querySelector('script')
const header = body.querySelector('h1')

body.insertBefore(div, script)

body.insertBefore(div, header.nextElementSibling)