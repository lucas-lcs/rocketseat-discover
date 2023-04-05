
# Desafio criação do header

- Crie o `<header>` de um site que contenha uma logo e um menu.
- Um elemento deverá ficar ao lado do outro.
- A logo que ficará na extrema esquerda e o menu na extrema direita.
- Os itens do menu ficarão um ao lado do outro, com um espaço de 8rem entre eles.
- O último elemento do menu será um botão de contato e você poderá utilizar o seletor:last-child para estilizar.


HTML 
```
<header>
  <nav>
      <a href="#">LOGO</a>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>SERVICE</li>
      <li>TETIMONIALS</li>
      <li>CONTACT</li> 
    </ul>
  </nav>
</header>
```

CSS 
```
* {
  margin: 0
}

header {
  padding: 4rem;
  background: lightgray;

}


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  align-items: center;
  gap: .8rem
}

ul li:last-child {
  background: black;
  color: white;
  padding: .8rem;
}
```

![Screenshot-1](https://user-images.githubusercontent.com/77105353/221384897-6607b9cc-b559-49f6-8c87-f940bfbba7a9.png)

