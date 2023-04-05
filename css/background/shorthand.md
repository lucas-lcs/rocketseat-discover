
# Shorthand

* Podemos usar o shorthand background para definir todos os valores do background


```
*{
  margin: 0
}

main {
  color: white; 
 
  background-color: rgb(10, 100, 50);
  background-image: url(https://www.rocketseat.com.br/assets/logos/boosting.svg); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  background-origin: border-box;
  background-clip: peddin-box;
  background-attachment: scroll;
  
  
  background: rgb(10, 100, 50) url(https://www.rocketseat.com.br/assets/logos/boosting.svg) no-repeat center / 100% border-box content-box fixed;
}
```