# Layout com 2 colunas

- Crie um layout com 2 colunas, uma ao lado da outra. 
- A coluna da esquerda deverá ter 25% de tamanho e a coluna da direita deverá ocupar todo o espalo que sobrar.
- Faça uma separação de 1rem entre os elementos. 

HTML 
```
<div class="container">
  <aside>Coluna a esquerda</aside>
  <main>Coluna direita</main>
  </div>
  ```

  CSS 
  ```


.container {
  display: flex; 
  gap: 1rem
}


aside, main {
  border: 1px solid;
  height: 95vh;
}

aside {
  flax-basis: 25%;
}

main {
  flex: 1;
}
```

