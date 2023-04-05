
# Programação funcional 

- Uma dado ou mais entra em uma função e um novo dado sai dessa função 
- Não altera dados 
- Não guarda estado statale(estado)  
- É uma maneira de resolver os problemas(paradigmas)
- Pequenas tarefas dentro de uma função 
- Abstrai um problema e isola dentro da funçao
- Não modifica os dados fora dela
- Pequenas e bem especificas no que fazem 
- Linguagem funcionais: JavaScript(miltiparadigma); PHP(Multiparadigma); Elixir; Haskell.

- Facil manutenção 
- Facil uso de testes 
- Código mais confiavel 
- Funções isoladas e consistentes

## Principios abordados 

- Paradigma 
    - Programação Imperativa 
    - Programação declarativa
- Dados 
    - Imutabilidade 
    - Stateless 
- Funções 
    - Independentes 
    - Puras 
    - Higher-order
    - First-class
    - Composição 

## Paradigma

* Programação Imperativa 
    - O código é pensado e ferado em sequência 
    - O código é pensado como um passo-a-passo, como uma receita de bolo
    - Uma coisa depende da outra 
    - O estado de um dado é alterado constantemente causando mutações nas variáveis
    - Orientação a Objetos é um tipo de paradigma imperativo

    ```JavaScript 
    // Função que eleva o número ao quadrado
    // imperativo: Faça da seguinte forma
    let number = 2 

    function square(){
        return number * number
    }

    number = square()

* Programação Declarativa
    - O código é gerado para fazer algo não importa como 
    - O que fazer e não como fazer 
    - Não há necessidade de um passo a passo no código
    - Programação funcional é um tipo de paradigma declarativo.

    ``` JavaScript
    //Declarativa: O que fazer e não como fazer.

    const aquare = n => n * n 
    
## Dados 

* Imutabilidade 
    - Uma variavel nao irá varia.
    - Se for preciso mudar uma variável, você não muda, você cria uma nova
```javaScript
// exmplo em js 
const cart = {
    quantity: 2,
    total: 200
}
// não pode! 
cart.quantity = 3 

//Pode e deve!
const newCart = {...cart, quantity: 3}

// Example em ReactJs
const [amount, setAmount] = useState(0)

//não pode! 
amount = 2

//Pode e deve! 
setAmount(2)
```
- Stateless 
    - Não guarda estado 
    - A função só conhece dados entregues a ela 
    - A resposta não poderá variar 
```javaScript 
let number = 2;

// stateful function
function square() {
    return number * number 
}

number = aquare()

// stateless function 
const square = n => n * n 
```
## Funções 
- Caracteristicas das funções na programação funcional

    - Funções independentes
        - Deverá ter ao menos 1 argumento 
        - Deverá retornar algo 
        - Nada que acontecer lá dentro afeta o mundo externo 
            - Dados imutáveis 
            - não guarda estado 
        - Não faremos uso de loops(for, while), mas se houver a necessidade de tal, usaremos a recursão(a função chama ela mesma) 

        ```javaScript
        const random = (number, Math) => Math.floor(Math.random() * number)
        // recursive 
        // find the factorial of a number

        const factorial = x => {

            // if number is 0
            if(x === 0) {
                return 1
            }

            return x * factorial(x - 1)
        }
        ```

    - Funções puras 
        - Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento 
        - Não deverá sofrer nenhuma interferência do mundo externo a ela 
        - Se o argumento é o mesmo, o retorno não podera ser diferente quando a função for chamada novamente 
        - Não terá nenhum efeito colateral no seu código 
            - Não irá modificar nenhum dado 
            - Não ira guardar nenhum estado 
        ``` javaScript 
          // Funções impuras 
          // Ex 1: está dependendo de dado externo 
          // que não foi passado como parâmetro 

          function calculandoCircumference(radius) {
            return Math.PI * (radius + radius)
          }

          // Ex 2: Está alterando um dado externo 
          let person = {
            name: 'Rafael Camarga',
            age: 'jovem'
          }

          function chageName(name) {
            person.name = name
          }


          // Funções puras 

          //Ex 1: 
          const calculateCircumference = function (pi, radius) {
            return pi * (radius + radius)
          }

          // com arrow function 
          const calculateCircunference = (pi, radius) => pi * (radius + radius)

          // Ex 2: 
          const changePerson = (person, name) => ({...person, name})
        ```

- First-class fuction 
    - Podem estar em qualquer lugar, inclusive, como parâmetro de outra função 
    - A função poderá ser atendida como uma variável 
```javaScript 
const sayMyName = () => console.log('Lucas')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))

```

- Higher-Oerder Function 
    - Funcção que recebem funções como argumento
    - Funções que poderão retornar outras funções 
    
```javaScript
// Ex com .map()js  
const numbers = [2, 4, 8, 16]

const square = n => n * n 
const squaredNumber = numbers.map(square)


// Ex de um retorno de função 
//(currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600)(() => console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1000ms'))
```

- Composição da função 
    - Um encadeamento de funçoes 
    - Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorn...

```javaScript
const people = ['Lucas', 'Leide', 'Lais', 'Diogo', 'Diego', 'Dalva']
const upperCase = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())
```


