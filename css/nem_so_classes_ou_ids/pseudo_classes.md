
# Pseudo classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class :pseudo-class-name

## first-child

:first-child
É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML
```
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```
CSS
```
ul li:first-child {
  font-weight: bold;
}
```


## nth-of-type

:nth-of-type()
Pega o elemento por tipo e posição

HTML
```
<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```
CSS
```
ul li:nth-of-type(1) {
  font-weight: bold;
}
```

## nth-child

:nth-child()
É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML
```
<ul>
	<h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```
CSS
```
ul li:nth-child(2) {
  font-weight: bold;
}
```

## nth-child odd e even

#### :nth-child(odd) e :nth-child(even)
* even - números pares
* odd - números ímpares


HTML
```
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```
CSS
```
ul li:nth-child(odd) {
  color: gray;
}

ul li:nth-child(even) {
  color: gray;
}
```

## hover e focus

Ações do usuário
Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

:hover
```
a:hover {
  color: red;
}
```
Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

:focus é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

```
input:focus {
  background-color: lightblue;
}
```

## disabled e required

Também podemos usar atributos para selecionar elementos no CSS

Atributos
:disabled

HTML
```
<input type="text" disabled>
```
CSS
```
input:disabled {
  background-color: green;
}
```

:required

HTML
```
<input type="text" required>
```
CSS
```
input:required {
  background-color: red;
}
```


## Pseudo-elements
Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

::pseudo-element-name

💻 Exemplos
::before adiciona um pseudo-elemento antes do elemento selecionado.

HTML
```
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```
CSS
```
li::before {
  content: "> "
}
```
::after adiciona um pseudo-elemento depois do elemento selecionado.
```
li::after{
  content: ";"
}
```
Tanto para o ::before quanto para o ::after é preciso adicionar o content, mesmo que ele seja vazio content = "";

::first-line pega a primeira linha de um texto.
```
p::first-line {
	font-weight: bold;
}
```
Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements




