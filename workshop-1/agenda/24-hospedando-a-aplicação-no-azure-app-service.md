## Hospedando a aplicação no Azure App Service

A primeira coisa que precisamos fazer, antes de realizar a implementação e hospedagem da nossa aplicação é executar o `build` na nossa aplicação. 

Para isso, abram a aplicação da Calculadora e execute o seguinte no prompt de comando:

```bash
> npm run build
```

Ao executar esse comando, ele criará uma pasta `dist` no projeto. E é justamente os arquivos contidos nessa pasta que precisaremos enviar para implementar na nuvem.

Agora sim, podemos hospedar a nossa aplicação.