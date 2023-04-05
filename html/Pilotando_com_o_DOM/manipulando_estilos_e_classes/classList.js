//classList 

const element = document.querySelector('body')


element.classList.add('active', 'green')// ativamos o estilo da class com o add 
console.log(element.classList)

// element.classList.remove('active')// removemos a class que ativamos com o remove

element.classList.toggle('active')// se tiver ele desativa se não ele ativa
