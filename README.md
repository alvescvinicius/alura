## Alura - Node.js: Criando uma API Rest com Express e MongoDB

Repositório para versionar e manter histórico de aprendizado durante as etapas do curso.

## Ambiente:

node-v18.20.3-win-x64 - Com variável de ambiente PATH adicionada.

## Criação do projeto:

mkdir alura-node-api-rest

cd alura-node-api-rest

npm init -y

- Adicionar type:module no package.json para ser possível importar modulos.

- Criar servidor, server.js

- Executa com node .\server.js

- Instalar nodemon para servidor reinicar sozinho: npm install nodemon@3.0.1

- Adicionar script no packge json.

- Executar o projeto com npm run dev

## Usando Framework Express

npm install express@4.18.1

## Usando persistencia - MongoDB Atlas

- Criar cluster free

- Criar Usuario de senha
- Criar acesso de rede 
- Connect para abrir opções escolher o driver do node na maior versao
- npm install mongodb
- User connection string que atlas fornece:

mongodb+srv://developer:developer@cluster0.gphz3ab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

- Criar pelo atlas web a database livraria, com collection name livros, sem preferencias adicionais
- Criar dados na collection livros:

_id : 667dfeaccae302d6d1c1415c
titulo : "Piratas do Caribe"
editora : "Disney"
preco : 10
paginas : 200

- npm install mongoose@7.3.4

- npm install dotenv