# Imagem dentro do botão

- Crie um botão que contenha ícone (img) e um texto. 
- Coloque um espaço de .4rem entre os elementos. 

```html

 <button type="button"><img src="https://user-images.githubusercontent.com/77105353/221387730-ded0ef4a-c915-465d-83cb-83843112272d.png" alt="click"> Click Aqui 
</button> 
  
  
 <button type="button"><img src="https://user-images.githubusercontent.com/77105353/221387844-2da3118d-34bc-476b-bae4-dd52a34fea07.png" alt=""> click aqui </button>
```
```css
buttom {
  display: flex;
  align-items: center;
  
  line-height: 0;
  gap: .4rem;
}


button img {
 width: 2rem;
 height: 2rem;
}
```