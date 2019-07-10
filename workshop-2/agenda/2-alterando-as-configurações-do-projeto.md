## Alterando as Configurações do Projeto

Vou pedir para vocês abrirem o projeto no Visual Studio Code e logo em seguida abrir o arquivo **package.json**, pois precisaremos fazer uma pequena alteração nele (alterar a linha 8):

```json
// package.json

{
  "name": "todo-app-task",
  "version": "1.0.0",
  "description": "Todo-List em Vue.js",
  "author": "Glaucia Lemos",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --open --hot",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js"
  },
  (...)

```

Essa alteração na linha 8 nos permitirá quando formos executar o comando: **npm run dev**, de abrir o browser automaticamente! O que nos auxiliará bastante na hora de desenvolver.

Vamos seguir adiante pois precisaremos alterar os componentes criados no Vue-CLI.