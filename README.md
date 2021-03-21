# MVP Commit Jr. - API utilizando o TMDb (The Movie Database)

Primeiro Projeto como membro oficial da Commit Jr. O Back-end foi realizado em Node.js, (com TypeScript) e Front-end, em React.

## Construcao Basica de uma API:

### NODEMON
- No diretorio do projeto, com o Yarn e Node (via Chocolatey ou nao) insatalados, executar o comando "npm init -y" no terminal.
- O "-y" executa o npm em modo default, sem a necessidade de iniciar informando os dados base.
- O comando ira criar o "package.json". Apos isso, crie um arquivo "index.js" utilizando o "echo > index.js".
- Executar o "yarn add express", o pacote sera usado p criar o servidor para as requisicoes.
- Editar o "index.js" com o seguinto codigo:

	const express = require("express");
	const app = express();

	app.use(express.json());

	app.listen(3333);

	app.get("/test", (request, response) => {
	  return response.json({
	    helloWord: "Hello Word",
	    App: "NodeJs App"
	  });
	});

- Para executar o servidor, basta utilizar o comando "node index.js" e acessar o endereco localhost:3333/test, sendo o "/test" por causa do metodo "get()" no "index.js".
- Agora, para adicionarmos um "auto reload", basta instalar o Nodemon com o comando "npm install -D nodemon", sendo o "-D" para especificar a instalacao em ambiente de desenvolvimento e nao de producao.
- Para validar o Nodemon, temos que alterar a parte de "scripts" do "package.json" com o seguinte codigo:

	"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "start": "nodemon index.js"
	},

- Para rodar o server, basta utilizar "npm start" (sendo o "start", a parte add no "package.json").
//npm start inicia o o servidor com o nodemon, "auto reload"


### TypeScript
- No diretorio do projeto, executar o comando "yarn add typescript -D" no terminal, sendo o -D para desenv.
- Agora, criando o "index.ts", note que a extensao e ".ts" e nao ".js" como anteriormente.
- O import do "express" via codigo no "index.ts" e feito agora da seguinte forma:

	import express from 'express';

- ** UTILIZAR O COMANDO "npm install express", PARA INSTALAR A "express.js". **

- Para instalar a tipagem do "express", que e uma biblioteca, e utilizado o comando "yarn add @types/express -D". Isso precisa ser feito pelo fato de o "import" ocasionar alguns erros, ja que o projeto n reconhece os tipos de cada biblioteca, sendo necessario add a parte.
- Para gerar um arquivo TS Config, nasta executar o comando "yarn tsc --init".
- Nesse arquivo config, ja iremos fazer uma alteracao: alterar o "target para es2017" -> converter apenas o necessario.
- Utilizamos o comando "yarn add ts-node-dev -D" para instalar os pacotes "ts-node-dev" para executarmos o projeto com TS e Node.
//"scripts" e um objeto assim como "devDependencies".

## Configuracao Basica do CORS - Cross-origin Resource Sharing:

- Para instalar o CORS, basta utilizar o comando "npm install cors" (npm install --save cors, "--save" para salvar no "packages.json").
- Incluir o CORS no pacote, assim cmo foi feito com a Express; "const cors = require("cors");".
- Ter o "app()" utilizando o CORS, isso deve ocorrer antes de qualquer funcao do codigo: app.use(cors()).

- N esquecer do comando "npm install --save @types/cors".

Ha uma forma alternativa a instrucao anterior, que e criar um "array function" com o app.use():

	app.use((req, res, next) => {
		//console.log("Acessando...");
		res.header("Access-Control-Allow-Origin", "http://localhost:3333", "*"); //"*" qualquer URL/aplicacao pode fazer requisicao.
		res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
		app.use(cors());
		next();
	});
