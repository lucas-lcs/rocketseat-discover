//Com o process conseguimos pegar tudo que está sendo executado dentro do Node JS.
console.log(process)

console.log('Seu nome é', process.argv[2] + ' ' + process.argv[3] )

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)