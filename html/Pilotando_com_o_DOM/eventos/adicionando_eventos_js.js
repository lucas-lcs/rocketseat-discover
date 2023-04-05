const h1 = document.querySelector('h1')

h1.addEventListener('click', print)
h1.addEventListener('mouseover', function() {
    console.log('Outro evento')
})



function print() {
    console.log('Aconteceu!')
}