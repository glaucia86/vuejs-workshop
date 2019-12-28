## Hospedando a aplicação no Azure App Service

### Executando o comando 'Build'

A primeira coisa que precisamos fazer, antes de realizar a implementação e hospedagem da nossa aplicação é executar o comando `build` na nossa aplicação. 

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

### Criando um Resource Group no Portal Azure

Entre agora no **[Portal Azure](https://azure.microsoft.com/features/azure-portal/?WT.mc_id=vuejsworkshop-github-gllemos)** e siga conforme os passos abaixo:

1 - Clique em **Resource Groups**

[![imagem-2.png](https://i.postimg.cc/vZ1rdNxx/imagem-2.png)](https://postimg.cc/xX2JvgR9)

2 - Clique no botão **Add New Resource Group**

[![imagem.png](https://i.postimg.cc/sg2nGmQ3/imagem.png)](https://postimg.cc/mt030Qyn)

3 - Escolha a Subscription que aparecerá para você e depois crie um nome para o campo **Resource Group**. No meu caso será: **CalcVueResourceGroup**. E por fim, escolha a **Region**, no meu caso escolherei: **(US) Central US**

[![image-1.png](https://i.postimg.cc/dQg9Bnxx/image-1.png)](https://postimg.cc/XXcFNK3f)

4 - Depois clique no botão: **Review and Create** e depois **Create**

[![Screen-Shot-07-01-19-at-06-45-PM.png](https://i.postimg.cc/mDvFQpg3/Screen-Shot-07-01-19-at-06-45-PM.png)](https://postimg.cc/bDRJPTbd)

Feito isso, você já terá criado um **Resource Group** para a sua aplicação. Vamos dar continuidade!

### Criando um Resource: Web App

Siga os seguintes passos abaixo:

1 - Clique no botão: **Create a Resource** onde há um sinal de +

[![Screen-Shot-07-01-19-at-06-48-PM.png](https://i.postimg.cc/yYv8KrCf/Screen-Shot-07-01-19-at-06-48-PM.png)](https://postimg.cc/1fVQcBt6)

2 - Na caixa de pesquisa, digite: **Web App** e depois clique no botão: **Create**

[![Screen-Shot-07-01-19-at-06-50-PM.png](https://i.postimg.cc/YCTk25nx/Screen-Shot-07-01-19-at-06-50-PM.png)](https://postimg.cc/K17CJHyK)

3 - Aparecerá uma outra janela, onde você deverá preencher da seguinte maneira:

* **Subscription:** (o mesmo Subscription do passo anterior)

* **Resource Group:** escolher o Resource Group que você criou no passo anterior. No meu caso: **CalcVueResourceGroup**

* **Web App Name:** aqui colocaremos o nome do link da nossa aplicação. Deverá ser um nome único. No meu caso, colocarei: **glau-calc-vue**

* **Publish:** escolher a opção **Code**

* **Runtime Stack:** aqui devemos escolher o runtime. Como estamos trabalhando com o JavaScript, vamos escolher a versão: **Node 10.0**

* **Operating System:** escolher a versão **Windows**

* **Region:** a mesma região que escolhemos no passo anterior. No meu caso: **Central US**

Deverá ficar da seguinte maneira:

[![image-2.png](https://i.postimg.cc/yx0n9Zsd/image-2.png)](https://postimg.cc/CnLjpdZT)

Na parte de App Service Plan, vamos criar um novo. Para isso, clique no botão: **Create New** -> criar um novo nome: **CalcVueServicePlan** -> **OK**

[![Screen-Shot-07-01-19-at-06-59-PM.png](https://i.postimg.cc/j2RngwyC/Screen-Shot-07-01-19-at-06-59-PM.png)](https://postimg.cc/47F3n3LT)

Agora a cereja do bolo! Vamos alterar o plano para hospedagem grátis. Para isso, faça o seguinte: 

1 - Em **Sku and size** clique em **Change size**. Depois disso abrirá a seguinte janela:

[![Screen-Shot-07-01-19-at-07-00-PM.png](https://i.postimg.cc/nzJXrjRT/Screen-Shot-07-01-19-at-07-00-PM.png)](https://postimg.cc/p9sW1Ttn)

2 - Clique na caixa: **Dev/Test** e depois escolha a opção **F1** -> e depois clique no botão **Apply**

[![Screen-Shot-07-01-19-at-07-02-PM.png](https://i.postimg.cc/fbZs0cs3/Screen-Shot-07-01-19-at-07-02-PM.png)](https://postimg.cc/w1WZCs7H)

3 - Na tag **Monitoring**, desativar o **Application Insigths** com a opção **No**

[![Screen-Shot-07-01-19-at-07-04-PM-001.png](https://i.postimg.cc/L88wdxm3/Screen-Shot-07-01-19-at-07-04-PM-001.png)](https://postimg.cc/PP02YzpC)

4 - E por último, clicar no botão: **Review and Create** -> **Create**

[![Screen-Shot-07-01-19-at-07-05-PM-001.png](https://i.postimg.cc/BQqwDmPf/Screen-Shot-07-01-19-at-07-05-PM-001.png)](https://postimg.cc/bdBTfHRm)

Feito isso, criará um **Web App** para nós! 

5 - Agora, cliquem em **Go to resource**

[![Screen-Shot-07-01-19-at-07-11-PM.png](https://i.postimg.cc/90p2bzBm/Screen-Shot-07-01-19-at-07-11-PM.png)](https://postimg.cc/m1tK2LqJ)

6 - Show! Aparecerá uma outra tela para vocês. Essa tela mostra toda a configuração da nossa aplicação. Nessa tela cliquem na url da aplicação: **https://glau-calc-vue.azurewebsites.net**

[![Screen-Shot-07-01-19-at-07-15-PM-001.png](https://i.postimg.cc/nVsw1X00/Screen-Shot-07-01-19-at-07-15-PM-001.png)](https://postimg.cc/0rsfkygw)

Abrirá a seguinte página:

[![Screen-Shot-07-01-19-at-07-16-PM.png](https://i.postimg.cc/FKBVfZ5m/Screen-Shot-07-01-19-at-07-16-PM.png)](https://postimg.cc/jWy7mySk)

7 - Vamos entrar no Kudu's da nossa aplicação. Para isso, façam o seguinte, precisaremos colocar `scm` na url da aplicação, digite da seguinte maneira: `https://glau-calc-vue.scm.azurewebsites.net/`

8 - Abrirá a seguinte página:

[![Screen-Shot-07-01-19-at-07-28-PM.png](https://i.postimg.cc/28SdxMkm/Screen-Shot-07-01-19-at-07-28-PM.png)](https://postimg.cc/Rq2nSPJb)

9 - Depois clique em **CMD**

[![Screen-Shot-07-01-19-at-07-29-PM-001.png](https://i.postimg.cc/zXQhFf2S/Screen-Shot-07-01-19-at-07-29-PM-001.png)](https://postimg.cc/ppDy2PHp)

10 - Depois clique em: **Site** -> **wwwroot** 

[![Screen-Shot-07-01-19-at-07-30-PM.png](https://i.postimg.cc/85yckyqB/Screen-Shot-07-01-19-at-07-30-PM.png)](https://postimg.cc/TLDfCc2p)

11 - Chegando até esse ponto, vamos agora transferir todos os arquivos da pasta `dist` do nosso projeto para dentro dessa página conforme o gif abaixo:

[![gif-1defa342a8d66baa7.gif](https://s3.gifyu.com/images/gif-1defa342a8d66baa7.gif)](https://gifyu.com/image/EmRI)

12 - Feito isso, digite a url da aplicação: `https://glau-calc-vue.azurewebsites.net/` e vejam que a aplicação estará online e funcionando e hospedado na nuvem de maneira gratuita! 

[![Screen-Shot-07-01-19-at-07-43-PM-001.png](https://i.postimg.cc/Kzc7sHPn/Screen-Shot-07-01-19-at-07-43-PM-001.png)](https://postimg.cc/2qJB1TX6)






