/*
/* Crie 2 arquivos java scripit
O primeiro irá exportar uma funcção chamada getFlag()
Que receberá um argumento do tipo string.
Essa função deverá buscar dentro do array process.argv a flag desejada, que é a Sting 
E retorna o valor da flag 

O segundo irá importar a função e passar a flag desejada.

Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting 
Para que seja impresso no terminal a saudação e o nome da pessoa. 

*/
function getFlag(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
} 
module.exports = getFlag;