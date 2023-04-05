# Box modal 

Nesta aula falaremos sobre o conceito de caixas, já que o CSS trabalha com essa ideia de caixas, ou seja, o box model. Mas o quê exatamente é esse box model?

É uma caixa retangular. Essa caixa possui as mesmas propriedades de uma caixa 2D, e tem como propriedades:

Tamanho (largura x altura): width e height, respectivamente
Conteúdo: o content
Bordas: o border
Preenchimento interno: o padding
Espaços fora da caixa: a margin
Quase todo elemento de uma página é considerado uma caixa: Posicionamentos, tamanhos, espaçamentos, bordas, cores, então, em suma, elementos HTML são caixas, assim como quase tudo no CSS.

```css
#box {
  border: 10px solid red;
  margin: 100px;
  padding: 60px;
}

.foi {
  font-size: 60px;
  border: 10px solid blue;
  margin: 150px;
  padding: 60px;
}