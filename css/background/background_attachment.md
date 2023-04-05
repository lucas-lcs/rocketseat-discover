
# Background attachment

* A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

> Principais valores 

```
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;
```

```
CSS 

*{
  margin: 0
}

main {
  color: white; 
 
  background-color: rgb(255, 200, 50);
  background-image: url(https://www.rocketseat.com.br/assets/logos/boosting.svg); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  background-origin: border-box;
  background-clip: peddin-box;
  background-attachment: scroll;
}

```