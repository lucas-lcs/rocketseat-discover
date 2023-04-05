# Git 
Sistema de versões distribuidos

Configurando a identidade 

Nesse vídeo falaremos sobre a configuração inicial do git, que será feita apenas uma vez por computador e o efeito se manterá mesmo após atualizações, e você também vai poder alterá-las em qualquer momento rodando esses comando novamente.

Primeiramente, abra o seu terminal e digite:

```
- git config --global user.name "Seu nome completo entre aspas"

- git config --global user.email seuemailaqui@dominio.com
```
Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

Caso você queira substituir essa informação para um projeto específico, apenas rode o comando sem a opção 
```
--global dentro daquele projeto.
```

Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:
```
git config --global core.editor "code -w"
```
Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:
```
 git config --list
 ```

 Para ver todas as pastas e alterações no git 
 ```
 ls -al .git
```
Primeiro iremos preparar nosso arquivo para isso, através do comando add, usado da seguinte forma:
```
git add .
git add nomeDoArquivo
git add *.md(estenção do arquivo)
```
O . nesse caso serve para selecionarmos todos os arquivos dentro do diretório.

Assim que tivermos executado esse comando, podemos criar nosso commit, da seguinte forma:
```
git commit -m "mensagem do commit, é obrigatória, então não se esqueça!"
git commit -am "lembre que podemos usar várias opções na mesma declaração"
```

## Git log filtragens 

Assim que rodar o comando no seu projeto, verá que temos uma hash, do tipo SHA-1, e também teremos entre parênteses o nosso branch, nesse caso o master, e no commit (sua hash), teremos o autor do commit, a data do mesmo e a mensagem do commit.

Caso queiramos um resultado menor desse comando, podemos usar a opção --oneline, da seguinte forma:
```
git log --oneline
```
Ele vai encurtar a hash, retirar o autor, a data e exibir a mensagem do commit ao lado.

Suponhamos que você tem 50 commits, e precisa apenas dos últimos 5, nesse caso, rode o comando a seguir:
```
git log -n 5
```
Ou seja, apenas coloque o argumento -n e a quantidade dos últimos commits que deseja.

Caso queira ver os commits após uma data específica, utilize o argumento --since, da seguinte forma:
```
git log --since=aaaa-mm-dd
```
Já caso queira os commits antes de uma data específica, use o argumento --until, da seguinte forma:
```
git log --until=aaaa-mm-dd
```
Você também pode aplicar um filtro para o autor do commit, para procurar os commits de uma pessoa em específico, usando o argumento --author, utilizado da seguinte forma:
```
git log --author=nomedoautor(nao precisa ser completo)
```
Também temos a forma mais poderosa de se utilizar o git log que é com o argumento grep, usado da seguinte forma:
```
git log --grep="o que quer que esteja buscando, ex: bugfix"
```
Basicamente significa expressão regular global, é muito comum na programação, e vai ser usado para buscar na mensagem do commit o que quer que você esteja buscando.

 - HEAD
 
 No git, a HEAD é um ponteiro, que nos aponta em que ponto da história estamos, em qual commit nós estamos, e nas próximas aulas veremos como fazer para irmos em outros pontos na história, outros commits.

- Git diff

     - A ferramenta git diff é muito poderosa para ver a diferença entre os arquivos que temos no nosso repositório e no nosso working directory.

```
git diff 
git diff --staged
```

- Git rm

Caso queiramos deletar um arquivo através do git, podemos usar o comando a seguir:
```
git rm nomedoarquivo
```

- Git mv

Renomear arquivos e mover 
```
git mv novoNomeDoarquivo
git mv nomeDaPastaatual NovaPastadestino
```

- Desfazendo modificações 

```
git restore nomeDoarquivo
git restore --staged nomedoarquivo
git restore --staged .
git reset HEAD nomeDoArquivo
git reset HEAD .
```

- Git commit

Corrigir um commit
```
git commit --amend -m "nova mensagem"
```

Git checkout

- Recuperando arquivos

```
git checkout HASH -- nomedoarquivo
```
- Git clean -f 

Removendo arquivos não rastreados aso queira confirmar o que o comando vai fazer use a opção -n, que vai mostrar os arquivos que o git vai apagar.


- REVERT 
Agora veremos como reverter um commit, como pegar um ponto antigo da história, revertê-lo e adicionar um novo ponto.

O primeiro passo é ter um diretório limpo, sem nenhum arquivo não rastreado, sem nada na stage area.

Usaremos então o comando git log, e onde nossa HEAD estiver, a cada commit subtrairemos 1, então, considere o commit atual como 0, o abaixo desse -1, o abaixo desse -2 e por aí vai.

Use o comando git revert, mas ao invés de um sinal de menos(-), use um til (~), da seguinte maneira:

```
git revert HEAD~5
```
Também há outra forma de fazer isso, que é usando a hash de onde exatamente você deseja reverter, hash que pode ser obtida facilmente através do comando git log --oneline, ficaria parecido com:
```
git revert 7f121d7
```

- Git show
 
 Nessa aula nos aprofundaremos nas modificações, em como vê-las e em tudo que já fizemos no histórico do projeto.

Podemos usar o comando git show e as letras iniciais da hash de um commit, da seguinte forma:
```
git show 7f121d7
```
Assim, veremos exatamente aonde essas mudanças ocorreram, e o que foi retirado ou adicionado, e podemos ser ainda mais específicos, usando a seguinte opção:
```
git show 7f121d7 --color-words
```
Essa opção vai nos permitir ver as palavras exatas que foram alteradas no nosso commit.

Podemos também ver as mudanças que houveram dentro de um diretório específico (nesse caso o diretório views, dentro do diretório src) através do --, usado da seguinte forma:
```
git show 7f121d7 -- src/views/*
```
Diferentemente do git diff, o git show serve como um atalho para mostrar exatamente o que há em um repositório em qualquer momento da história, enquanto o git diff vai apresentar as diferenças encontradas no working directory e stage area.


Ignorando arquivos e diretórios indesejados
Descrição
Veremos aqui como fazemos para ignorar arquivos e diretórios que não queremos no nosso repositório, através do .gitignore.

O primeiro passo é criar o arquivo .gitignore, adicionar o nome do arquivo ou diretório que desejamos ignorar, e adicionar o nosso .gitignore ao nosso repositório, primeiro com o comando git add, e depois o git commit.

O seu .gitignore já foi para dentro do repositório e está pronto para rastrear os arquivos.

Caso tenha algum arquivo no seu repositório que você tenha adicionado ao .gitignore, como no exemplo do vídeo, o .DS_Store, apenas rode o comando abaixo:
```
git rm -r --cached .
```
Esse comando vai fazer o git parar de rastrear todos os arquivos, deixando-os no working directory apenas.

Após isso, executaremos o comando git add . que vai colocar todos os arquivos novamente na stage area, exceto os que serão ignorados pelo nosso .gitignore.

Depois, apenas fazemos um commit com uma mensagem que reflita o que fizemos.
