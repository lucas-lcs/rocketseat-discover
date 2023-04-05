
// argumento event 

const input = document.querySelector('input')

input.onkeyup = function(event) {
    console.log(event)
}

// input.onkeyup = function(event) {
//     console.log(event.code)
// }

input.onkeyup = function(event) {
    console.log(event.currentTarget.value)
}