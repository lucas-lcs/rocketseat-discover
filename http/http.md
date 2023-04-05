# HTTP
Primeiro vamos entender qual o significado da sigla HTTP, que é Hypertext Transfer Protocol, em português Protocolo de Transferência de Hipertexto que é o conjunto de regras para a comunicação por meio de Hipertexto, um tipo de texto que pode carregar diferentes dados. O protocolo HTTP é usado todos os dias para acessar sites pela internet, pois é ele que permite a troca de dados na web, entre esses dados estão códigos HTML e CSS, Scripts. imagens e vídeos, entre muitos outros, e para cada um desses recursos executa uma chamada.

## Ferramenta Curl 
- Por mais que já possamos visualizar algumas informações com o DevTools, precisamos de alguns detalhes a mais para trabalhar, então usaremos uma ferramenta extra chamada cURL, que já vem instalada em sistemas baseados em UNIX, e no Windows nós aconselhamos a usar a ferramenta Git Bash, que também vem com ela. Usando o cURL podemos entender alguns conceitos, primeiramente temos que saber que o cURL está fazendo o papel do cliente, ao invés do navegador, com a ferramenta, também conseguimos ver o corpo da resposta, o que não era possível com o DevTools, e para também pegar os headers com o cURL, podemos adicionar -i ao comando antes do link, com o parâmetro -v podemos ver todos os headers, tanto os de saída quanto de chegada.

ex. 
```
curl https://google.com
curl -i https://google.com
curl -v https://google.com
```

## Conceitos 
### Cliente

- O Cliente é a entidade que dá inicio à toda comunicação com um pedido, fora em algumas poucas exceções. Esses pedidos são feitos através de ações, que usam os métodos do HTTP, como GET, POST, PUT e DELETE, que vamos ver com mais detalhes em uma próxima aula.

### Servidor
- É uma máquina em algum lugar do mundo preparada para lidar com as requisições do cliente e mandar uma reposta. A resposta sempre tem um Status Code, e pode ter headers e body.

### Proxies
- São coisas que ficam entre o Servidor e o Cliente, como por exemplo o roteador que está servindo internet para você agora. O Proxy pode ter diversas funções, como cache, para armazenar algumas informações e acelerar o uso. filtro, para impedir o acesso de alguns sites para um antivirus ou um controle parental, entre outros.

## URI - Uniform Resource Identifier(Identificador de Recurso Uniforme)
- Precisamos entender primeiramente como montar um endereço, para isso usamos o URI, sigla para Uniform Resource Identifier, Identificador de Recurso Uniforme em português, que serve para identificar um recurso por seu nome ou sua localização.
> ex. Vc é um URI, seu nome e sua localização! 

### Recurso
-  Um recurso pode ser qualquer coisa identificável, como uma entidade digital, como um email, uma entidade abstrata, como uma sessão e até uma entidade física, como um produto.

Qualquer coisa identificavel: 

digital:
e-mail é um recurso acessado pelo emailto:lucas@gmail.com

Abstrato: recursos onde preciso de caminhos endereço ou saber como realizar a autenticação

Fisica: Produtos ou usuários

se podemos identificar, nomear, endereçar ou manipular estamos falando de recurso. 

### URL

Um recurso pode ser encontrado pelo locator, localizador em português, ou pelo nome, para encontrar com o locator, utilizamos o URL, sigla para Uniform Resource Locator, ou seja, toda URL é um URI, mas o contrário não é verdadeiro. Toda URL obrigatoriamente precisa de 2 componentes, um *protocolo*, que é por exemplo o "HTTPS" em uma URL, e um *domínio*, que é por exemplo a parte "rocketseat.com.br" no site da Rocketseat. A URL pode ter alguns outros componentes opcionais, como o subdomínio, como a parte "www." antes de alguns URLs, como o Path, que serve para acessar partes específicas de um site, como os Parâmetros, como a Porta, que é um componente que é adicionado depois do domínio por um carácter :, e também a Âncora, que serve para apontar algum lugar específico de algum documento.

```
https://www.recketseat.com.br/blog = URL
https://www.youtub.com.br/watch?v=vpYct2npHD8
https://127.0.0.1:3333/index.html#algumlugar

```

protocolos -> http && https

domínio -> rocketseat.com.br

subdomínio -> www (vem antes do domino)

path -> /blog

parametros -> ?v=vpYct2npHD8

port: 3333

Âncora: #algumlugar


## URN Uniform Resource Name 
Para encontrar um recurso pelo nome, ao invés da URL, utilizamos a URN, Uniform Resource Name. Um exemplo de URN é urn:isbn:0451450523, porém a URL é bem mais usada na web.

## Resumo 
 O *URI (Uniform Resource Identifier)* é a forma de encontrar um recurso, que se trata de qualquer entidade indentificável, na internet pelo seu nome ou pelo seu local, a forma mais usada é pelo local, usando a *URL (Uniform Resource Locator)*, que possui 2 componentes obrigatórios, o Protocolo e o Domínio, e 5 opcionais, o subdomínio, o Path, os Parâmetros, a Porta e a Âncora.


 ## HTTP Message

 - *Request* 
    - A mensagem do pedido consiste no método, por exemplo GET, a versão do protocolo e a URI, dependendo do método usado, pode se levar headers e body.

    ```
    curl -v http://www.google.com
    ``` 
- *Response* 
    - A mensagens de resposta tem a versão do protocolo, o status code, os headers e a status message.

    ```
    curl -i http://www.google.com
    ```

## Methodos
  - verbos do HTTP que apesar de poderem ser chamados assim não necessáriamente tem formato de verbos. Eles servem para indicar o intuito da operação que o cliente está realizando, e cada um possui seu significado, que vamos estudar nas próximas aulas. Os métodos podem ter 2 características, seguro e idempotente. Métodos seguros não alteram o servidor, são de apenas leitura, então não apresentam carga extra para o servidor e são mantidos seguros por ele, métodos considerados seguros são: GET, HEAD e OPTIONS. Os métodos Idempotentes são os métodos que não mudam de resposta, por isso a parte de "idem" no nome, mas podem ter status codes diferentes os métodos idempotentes(a resposta é sempre a mesma coisa) são todos os métodos seguros, PUT e DELETE.

## Json Server 
-  ferramenta JSON Server, que nos permite pegar respostas em formato JSON. Antes de tudo temos que já ter o Node.js instalado na máquina, depois disso podemos executar o comando 
```npm install -g json-server``` 
, depois do comando terminar, crie um diretório chamado http-course e entre nele, copie as linhas de código:

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Agora pra iniciar o servidor, podemos usar o comando 
```
json-server --watch db.json
```
 e assim podemos acessar esses conteúdos.

- *Option*
    - é um verbo HTTP que irá nos dar informações sobre a disponibilidade de métodos da requisição. Ele é um método seguro, pois não faz alteração alguma, e é idempotente, pois sempre retornará a mesma coisa para a mesma requisição, o OPTIONS não manda nem recebe um Body, não é usado em formulários e nem é cacheable.

    ``` curl -x OPTION http://localhost:3000/posts
- *GET*
  - Serve para pegar um recurso, ou seja, só pode receber dados. Ele é um método seguro e idempotente, que não pode enviar um Body no request, mas pode receber no response, ele também pode ser cacheable e é usado em alguns formulários.
```
curl -v http://localhost:3000/posts
curl http://localhost:3000/posts\?q\=json
```
- *HEAD*
  - que é semelhante ao GET, porém é recebido somente o cabeçalho. Ele é um método seguro e idempotente, não tem Body nem no envio nem na resposta, não é usado em formulários e é cacheable.

  ```
  curl -I http://localhost:3000/posts
  ```
- *POST* 
    - vem do inglês to post, que serve para publicar ou cadastrar um recurso. Ele não é seguro nem idempotente, pois muda informações no servidor e não receberá a mesma resposta de uma mesma requisição, o verbo POST tem Body tanto na requisição quanto na resposta, pode ser usado em formulários e é cacheable.

    ```
    curl -i '{"id": 1,"title": "json-server","author":"typicode"}'
    
    Alterando 
    curl -d '{"id": 2,"title": "json-server-2","author":"Lucas Alves"}' -H "Content-type: application/json" -X POST http://localhost:3000/posts

    vendo as alterações 
    cat db.json
  ```
  
    ```json
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "id": 2,
      "title": "json-server-2",
      "author": "Lucas Alves"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
  ```

- *PUT*
  -  Serve para criar ou atualizar um recurso, porém, diferentemente do POST é idempotente e normalmente usado para atualizar recursos. O status code de criação do PUT é 201, e o de atualização é o 204 ou 200. O verbo PUT não é seguro, pois altera dados no servidor, mas é idempotente, tem Body na requisição mas não na resposta e não é usado em formulários nem é cacheable.

  ```json
  curl -d '{"name": "Lucas Alves"}' -H 'Content-type: application/json' -X PUT http://localhost:3000/profile
  {
  "name": "Lucas Alves"
  }

  ```

-  *PATCH*
  - Serve para modificar parcialmente um recurso, diferentemente do PUT, que é usado para modificar o recurso inteiro. Ele não é um verbo seguro nem idempotente, e recebe um Body tanto na requisição quanto resposta, não é usado em formulários e não é cacheable.

- *Delete*
  - serve para remover um recurso, e pode ser respondido com o código 202, que não foi processado mas já foi aceito, 204, que significa que o recurso não existe e 200, que significa que o conteúdo foi deletado. Ele não é um método seguro, mas é idempotente, tem a possibilidade de receber Body tanto na requisição quanto na resposta, não é usado em formulários e não é cacheable

  ```json 
  curl -X DELETE http://localhost:3000/posts/2
  ```

- HEADERS
  - se trata de uma série de informações adicionais para o pedido ou reposta e geralmente é estruturado da forma "nome: valor", por exemplo o Content-type: application/json. Durante esse módulo iremos apresentar os headers mais comuns.


## Headers 

Header significa cabeçalho, e se trata de uma série de informações adicionais para o pedido ou reposta e geralmente é estruturado da forma "nome: valor", por exemplo o Content-type: application/json. Durante esse módulo iremos apresentar os headers mais comuns.

- *General*

  - Na parte de General, podemos perceber que são Headers que servem tanto para o pedido quanto para a resposta, ou seja, é um agrupamento geral. Dentro deste grupo tempos o Request URL, que é o local do site, o Request Method, que é o método do pedido, o Status Code, o Remote Address, que é um IP que pode ser entendido como quase um endereço físico, e por fim temos o Referrer Policy, que é uma política para o referenciado, ou seja, são políticas para o redirecionamento.

- *Request Headers* e *Response Headers*
  - Se abrirmos a aba dos cabeçalhos de request, podemos ver vários headers, como o :authority:, que é a autoridade do pedido, o :method:, que é o método do pedido, o :path:, que é o caminho do pedido, o :schema:, que é o esquema que foi usado, o accept, que é o que é aceito, accept-encoding, que são os tipos de compressão usados, cookie, que são rastros deixados para a próxima conexão, entre outros.

- *Obtendo ajuda* 
  - Para obter mais conhecimento nessa parte, nós recomendamos o app DevDocs, que serve para buscar informações sobre diversos frameworks, headers, etc. Tudo está em inglês, mas pode-se ir usando ferramentas de tradução para facilitar o entendimento



  



## Status code mais comuns 

A proposta do status code é ter uma comunicação mais clara entre o back-end com o cliente. Os status code do tipo 100 servem pra mostrar que a operação pode ser continuada sem problemas. Os status code do tipo 200 podem significar: 

200 em si, significa que tudo está ok (GET e POST), 

201, significa que o recurso foi criado (PUT), 

204, significa que não há conteúdo (PUT e DELETE). 

Os status code do tipo 300 podem significar: 301, significa movido permanentemente, 

308, significa redirecionamento permanente, 

302, significa uma mudança temporária assim como o 307. 

Os status code o tipo 400 podem significar: 400, que significa que o pedido foi mal efetuado, 

401, que significa que o pedido não teve autorização, 403, que significa que a autorização foi negada, 

404, que o pedido não foi encontrado, 

405, que significa que o método usado não é permitido e 429, que significa que foram efetuados muitos pedidos. 

Os do tipo 500: 500, que significa que ocorreu um erro desconhecido no servidor e o 503, que significa que o servidor está indisponível no momento.