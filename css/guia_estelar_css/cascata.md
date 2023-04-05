
# Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

Seu estilo é lido de cima para baixo. 

É levado de cima para baixo 

É levado em consideração 3 fatores 

1. origem do estilo 
2. especifidade
3. importância

## Origem do estilo 

inline > tag style > tag link 

inline => 

<h1 style="color: green"> Title </h1> 

tag style =>

 <style> 
  h1 {
  color: gray ;
  }
</style> 

tag link => 

h1 {
  color: blue
}

### Especificidade 

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem cansiderados. 

0. Universal selector, combinators e navegatio pseudo-class (:not())
1. eElement type selector e pseudo-element(::before, ::after)
10. Classes e atribute selectors([type="radio"])
100. Id selector
1000. Inline


### A regra !important

* cuidado, evite o uso 
* Não é considerado boa pratica 
* quebra o fluxo natural da cascata



