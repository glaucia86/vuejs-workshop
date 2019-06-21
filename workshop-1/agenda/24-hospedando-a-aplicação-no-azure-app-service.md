## Hospedando a aplicação no Azure App Service

### Executando o comando 'Build'

A primeira coisa que precisamos fazer, antes de realizar a implementação e hospedagem da nossa aplicação é executar o `build` na nossa aplicação. 

Antes de executar o comando `npm run build`, será necessário realizar algumas alterações significativas no arquivo `package.json`.

Abre o arquivo `package.json` e altere a versão do pacote abaixo:

```json
"optimize-css-assets-webpack-plugin": "^3.2.0",
``` 

Depois, execute o comando no prompt de comando:

```bash
rm -rf node_modules
```

Esse comando fará que desinstale a nossa pasta `node_modules`. Após isso, agora execute o comando:

```bash
npm install
```

Depois de realizar os passos acima, podemos executa o seguinte comando:

```bash
> npm run build
```

Ao executar esse comando, ele criará uma pasta `dist` no projeto. E é justamente os arquivos contidos nessa pasta que precisaremos enviar para implementar na nuvem.

Agora sim, podemos hospedar a nossa aplicação.

