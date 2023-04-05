
# NPM 

- Node Package Manager 

Glossary: Depedencies, Packages, Modules_

- [ ] Verificar se temos o npm instalado 
        
        - npm -v
- [ ] Criar nosso próprio pacote 
        
        -   npm init || npm init -y
- [ ] O que é um arquivo package.json 
        
        -  O arquivo package. json é onde configuramos o nome da aplicação e qual arquivo usar na inicialização. Vai ser nele também que vamos definir os packages que precisamos.

- [ ] Utilizar modulos de terceiros 
        
        - npm install nomeDoModulo
        
        - npm -i nomeDoMudulo
        
        - npm install nomdeDoModulo -D (dependencia desenvolvimento)
     npm update (atualiza toda as alteraçoes dos packages)

- [ ] O que é um diretório node_modules 
        
        -  Quando é instalado um modulo que tem como dependencia outros modulos. nunca sobe para o repositório removendo com o .gitignore  node_modules/

- [ ] O que é o arquivo package-lock.json
        
        - Faz um mapeamento de todos os modulos, por isso devemos evitar apagar.

- [ ] Criar scripts para rodar com npm
    
        - Comandos que vc deseja executar pelo terminal 
        - quando for o camando start não precisa passar o run no script 
        - npm run dev 
        - npm start 
- [ ] Instalar o pacote de maneira global
        
        - npm install nomeDoPacote -g
        - npm root -g (para saber onde está instalado)

- [ ] Desinstalar pacotes 

        - npm uninstall nomeDoPacote

- [ ] Mudar versão de pacotes

        - npm outdated (para ver todas as versões do pacote)
        - npm upgrade (ele vai atualizar todos os modulos)
        - npm install nomeDoModulo@latest (atualizar para ultima versão)