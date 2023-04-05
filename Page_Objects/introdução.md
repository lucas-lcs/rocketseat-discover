# O que é? 
- Oriented Object Programming ou OOP
- Um paradigma de desenvolvimento 
- Uma maneira de resolver um problema, um modo de pensar 
- Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporal para criação de software. 

## Onde e quando utilizar?

- Linguagens 
- Quando quiser aplicação Padrões de Projeto 
- Quando quiser organizar seu código 
- Para melhorar o entendimento do código, pensando nele como objetos
- Quando precisar fazer reuso de código 
- Para separar a complexidade de código, abstrair código e expor de maneira mais simples
- Para classificar as rotinas e trechos de códigos. 

## Objetos 
Todo objeto possui:

- Propriedades e Funcionalidades 
- Estado e comportamento 
- Atributos e Métodos 

## Abstratos VS Mundo real 

Trazemos a representação de algo do mundo real par objetos 
- Pessoas 
- Aluno 
- Produto 
- carrinho de compras

Poŕem,, alguns objetos na programação não são fáceis de identificar, pois são abstratos como, por exemplo: 
- Autenticação 
- Autorização

Nem todo objeto do mundo real fará parte do seu sistema. 

## Classes 

As classes na orientação a objetos funcionam como um model para os objetos. Os objetos são criados a partir de uma classe e muitos deles pode ser feito de mesma classe. 

- Exemplo: Máquina de biscoito 
    - Instâncias 

temos uma maquina de biscoito(classes) que pode fazer muitos biscoito(instancia) com apenas ela!

## Classes em JavaScript 

- Syntactical sugar 
- Prototype

 As classes são prototypos que herdão herança de outros objetos dos pais. 

 ## Encapsulamento

Dirigir carro VS conhecer o motor do carro

- Colocar numa cápsula 
- Agrupamento de funções e variáveis 
- Esconder detalhes de implementação 
- Camada de segurança para o atributos e métodos

## Confusão e solução 

Programa Estruturado vs Orientado a objeto 

- Programa Estruturado
    - Processa a entrada e manipulação dos dados, até a saída 
    - Uso de sequência, estrutura de repetição e condições 
    - Uso de uma rotina maior, ou sub-rotinas 
    - Não existem restrições as variáveis 

- Programa Orientado a Objetos 
    - Surge para trazer um cuidado ao uso estruturado
    - Não elemina por completo o uso estruturado 
    - Conceito como Objetos e Classes 
    - Cuidado com variáveis e rotinas(Encapsulamento)
    - Melhor reuso de código(Herança)

## Herança 

- Pais e filhos 
- Objetos podem herdar, ou estender, característica bases 
- Uma cópia de atributo e método de outra classe
```javascript
class Veiculo {
    rodas = 4

    mover(direcao){}
    virar(direcao){}

}

class Moto extends Veiculo {
    constructor() {
        super() // puxa atributos e métodos do pai
        this.rodas = 2 

    }
}

```
- Um objeto pode estender de outro objeto que pode estender de outro objeto 
- Facil reutilização de código

## Polimorfismo

Quando um objeto estende de outro(herança) talvez haja a necessidade de reescrever uma ou mais características(atributos e métodos) nesse novo objeto. 

Recriaremos então um método(ou mais) de classe herdada. 

Polimorfismo significa muitas formas. 

## Abstração 
Template ou identidade de uma classe que será construída no futuro

- Atributos e métodos poder ser criados na classe de Abstração (Superclasse) MAS
- A implemenatação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração 
