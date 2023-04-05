
# Page Layouts
* Nessa aula vamos ver alguns dos métodos usados para posicionar os elementos na tela.

* Tables
* Floats e clear
* Frameworks e Grid Systems
* Flexbox
* Grid

# Posicionamento

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

> Name: position

```
Value: static | relative | absolute | fixed
```

* Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.

Exemplo codepen.io

HTML 
```
<div class="box1 box"></div>
<div class="box2 box"></div>
<div class="box3 box"></div>
```

CSS
```
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px
}


.box1 {
  background-color: red
 }

.box2 {
  background-color: green
 }

.box3 {
  background-color: blue
 }
```

# Static

* Por padrão todos são static . Isso significa que os elementos irão seguir o fluxo normal do HTML.

# Relative

* top, right, bottom, left, z-index

ex. 
CSS 
```
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px
}


.box1 {
  background-color: red;
  position: relative;
  left: 100px
 }

.box2 {
  background-color: green;
  position: relative;
  right: 10px
 }

.box3 {
  background-color: blue;
  position: relative;
  bottom: 100px 
 }
 ```

 # Absolute
 Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

 ```
 CSS

.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 100px;
  top: 80px
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```

# Fixed

* Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

# Element Stacking

É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

Ex. 

CSS 

```
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 1;
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 1
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px;
  z-index: 2
}
```


# Flex 

* Nos permite posicionar os elementos dentro da caixa
Controle em uma dimensão (horizontal ou vertical)
Alinhamento, direcionamento, ordenar e tamanhos

```
div.parent {
	display: flex;
}
```

### Flex-direction

* Qual a direção do flex: horizontal ou vertical
row | column

### Alinhamento

```
justify-content
align-items
```

Ex. 

HTML

```
<div class="container">
  <div class="box blue"></div>
  <div class="box red"></div>
  <div class="box green"></div>
</div>
```

CSS
```
body {
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center
}

.container {
    width: 100vw;
    display: flex;
    justify-content: center;
}

.box {
  width: 100px;
  height: 50px;
}

.blue {
  background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}
```

# Grid
* Posicionamento dos elementos dentro da caixa;
* Posicionamento vertical e horizontal ao mesmo tempo; 
* Pode ser flexivel ou fixo 
* Criar espaços para os elementos filhos habitarem

HTML 

```
<body>
<header> Topo </header>

<main>Conteúdo</main>

<aside>Infos adicionais</aside>

<footer>Rodapé</footer>
  
</body>
```

CSS

```
body {
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
  
  grid-template-rows: 30px 1fr 40px;
  grid-template-columns: 1fr 80px
}


header {
  grid-area: header;
  background-color: green;
}

main {
  grid-area: main;
  background-color: blue;
}

 aside {
   grid-area: aside;
    background-color: red;
}

footer {
   grid-area: footer;
    background-color: gray;
}
```

# Grid ou Flexbox

Podemos usar o Display Flex e Display Grid ao mesmo tempo.

HTML

```
<body>
    <header>
        <div>Logo</div>
        <div>Menu</div>
    </header>
    <main>Conteúdo</main>
    <aside>Infos adicionais</aside>
    <footer>Rodapé</footer>
</body>
```

CSS

```
body {
    margin: 0;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "header header"
    "main aside"
    "footer footer";
    grid-template-rows: 30px 1fr 40px;
    grid-template-columns: 1fr 80px;
}

header {
    grid-area: header;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
}

main {
    grid-area: main;
    background-color: red;
}

aside {
    grid-area: aside;
    background-color: blue;
}

footer {
    grid-area: footer;
    background-color: gray;
}

```
