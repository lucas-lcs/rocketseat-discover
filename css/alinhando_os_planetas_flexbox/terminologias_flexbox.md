
# Flex container - Flex item e Nesting

## Flex Container
    - Flex item

* Propriedades
    - Direção do itens 
        * Flex é uma direção (Horizontal ou Vertical)
        * Podemos mudar a direção com `flex-direction`
        * Valores: (row | row-reverse | column | column-reverse)
            - ex
                ```html
                <div class="flexbox">
                  <item class='item'>A</item>
                 <item class='item'>B</item>
                 <item class='item'>C</item>
               </div>
                ```
            CSS
            ```
            .flexbox {
              display: flex;
              flex-direction: column-reverse;
              height: 80vh;
            }
            ```

    - Multi linhas
        ### Flex-wrap
            - Podemos usar multi linhas. 
            - Cada nova linha, um novo flex container
        ```html
        <div class="box">
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </div>
        ```

        CSS
        ```
        .box{
              display: flex;
              flex-wrap: wrap-reverse;
              border: 1px dashed red;

            }

            .box div {
              border: 1px solid;
               width: 800px;
            }
        ```


        Direção e multi linha em uma única propriedade
    ### Flex-flow
        - Shorthand
        - flex-direction || flex-wrap

        CSS 
        ```
        .box{
          display: flex;
          flex-flow: column wrap;
          border: 1px dashed red;
          }


    Alinhamento dos itens no eixo principal
     ## justify-content
        - Alinhamento dos elementos dentro do container
        - Distribuição dos elementos 
    ## Valores 

        - flex-start
        - flex-end
        - center
        - space-around
        - space-between
        - space-evenly

    CSS
    ```
    .box{
        display: flex;
        junst-conten: space-between;
    }
    
    ```

   
    Alinhamento dos itens no eixo cruzado
    ## align-items
        - Alinhamento dos elementos no eixo cruzado
    ## Valores
        - stretch
        - flex-start
        - flex-end
        - center
    CSS
    ```
    .box{
        display: flex;
        align-items: center;
        border: 1px dashed red;
        height: 150px;
    }
    ```

    - spaços entre os itens 


    ## Gap 
       - Espaço entre os elementos 

    ## Valores

        Unidade de medidas 
        fixas: px, pt
        flexíveis: %, em, rem
    CSS 
    ```
    .box{
         display: flex;
         border: 1px dashed red;
        gap: 2rem
    }
    ```


## Nesting
- Axis
    - main
        - start, end
    - cross
        - start, end



## Flex sizing
    - flexível 
    - Altera width/height dos itens para preenchimento dos espaços do flex container


## Lagura e altura dos itens com flex-basis 
A flex-basis propriedade especifica o comprimento inicial de um item flexível.

CSS 
```
.box div {
  border: 1px solid;
  flex-basis: 25%
}
```

## Flex-grow

A flex-grow propriedade especifica quanto o item crescerá em relação ao restante dos itens flexíveis dentro do mesmo contêiner.

Observação: se o elemento não for um item flexível, a flex-growpropriedade não terá efeito.

CSS 
``` 
.box div:nth-child(3),
.box div:nth-child(2){
  flex-grow: 1;
}

.box div:nth-child(1) {
  flex-grow: 3;
}
```

## Flex-shrink
A flex-shrink propriedade especifica como o item encolherá em relação ao restante dos itens flexíveis dentro do mesmo contêiner.

Observação: se o elemento não for um item flexível, a flex-shrinkpropriedade não terá efeito.

CSS
```
.box div {
 flex-basis: 45%;
  boder: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(1){
  flex-shrink: 4
}
```
## Flex 
A flexpropriedade é uma propriedade abreviada para:

- flex-crescer
- flexionar
- base flexível

A flexpropriedade define o comprimento flexível em itens flexíveis.

Observação: se o elemento não for um item flexível, a flexpropriedade não terá efeito.

CSS
```

.box div {
 flex-basis: 45%;
 flex: 1 3 40px
}
```


## Alterando tamanho de multiplos itens 

HTML 
```
<div class="page">
    <aside>Aside</aside>
    <main>
      Main
      <section>Content 1</section>
      <section>Content 2</section>
      <section>Content 3</section>
      <section>Content 4</section>
    </main>
</div>

CSS 
```
    .page {
      border: 2px solid;
      min-height: 100vh;
      display: flex
    }

    aside {
      background: lightgreen;
      flex: 1;
    
    }

    main {
      background: lightblue;
      flex: 2;
      display: flex;
      flex-direction: column
    }

    main section:nth-child(1) {
      background: lightgoldenrodyellow;
      flex: 2
    }
    main section:nth-child(2) {
      background: lightsalmon;
      flex: 2
    }
    main section:nth-child(3) {
      background: lightpink;
      flex: 0 50px
    }

    main section:nth-child(4) {
      background: lightgray;
      flex: 2
    }
```