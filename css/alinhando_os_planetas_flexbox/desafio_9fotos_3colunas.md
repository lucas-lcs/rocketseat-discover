
# Desafio 9 fotos e 3 colunas


- Crie uma galeria de fotos onde teremos 3 colunas e 9 fotos.
- Deixe um espaço de .8rem entre os elementos da galeria. 

```html
<div class="gallery">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
</div>
```

```css

img{
  width: 30%;
  height: auto;
  }

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  justify-content: center;
}
```