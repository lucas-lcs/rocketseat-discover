
# Layouts e evoluções
Layouts tem a ver com a maneira que os elementos estão distribuídos na tela 

## Normal Flow 
Ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página 

```html
<p> texto block com <strong>inline</strong> dentro </p> 
```

## Tables 

È a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela.

<table>
    <tr>
        <td>Hora</td>
        <td>20:00</td>
    </tr>
     <tr>
        <td>Hora</td>
        <td>20:37</td>
    </tr>
</table> 


## Tabless
Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left" >
    esquerda
</div> 

<div style="float: right" >
    Direita
</div> 

<div style="clear:both" >
    Normal
</div> 

```

## Flexbox 

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor: 

- Alenhamento
- Ordenamento
- Tamanhos Flexíveis

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
  justify-content: space-around;
  flex-direction: column;
}
```