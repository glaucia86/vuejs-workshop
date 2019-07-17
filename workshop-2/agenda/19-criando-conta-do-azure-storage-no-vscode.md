## Hospedando a aplicação no Azure Storage Account no Visual Studio Code 

Agora que vocês já baixaram as extensões **Azure Tools** e **Azure Storage Account**, vamos hospedar a nossa aplicação na nuvem para que todas as pessoas possam visualizar o que desenvolvemos! Lembrando que você precisará de uma conta Azure para seguir nessa parte do workshop!

1. Abram o seu Visual Studio Code e abram o projeto. Faça o login na conta no Azure, assim como no gif abaixo:

[![gif-13d30f8caed4232383.gif](https://s3.gifyu.com/images/gif-13d30f8caed4232383.gif)](https://gifyu.com/image/E04p)

2. Abre o prompt de comando e execute o comando abaixo:

```bash
> npm run build
```

Depois de executar o comando acima, ele criará uma pasta `dist` no projeto. Ele será muito importante, pois justo os arquivos contidos nessa pasta é que enviaremos para o Azure Storage.

3. Agora vamos configurar uma conta no Azure Storage Accout e um Blob Contêiner. Para isso, clique na extensão do Azure Tools onde está o **Azure Storage** e depois clique com o botão direito na sua **subscription** e clique em **Create Storage Account**.

[![gif-14.gif](https://s3.gifyu.com/images/gif-14.gif)](https://gifyu.com/image/E04f)

4. Agora aparecerá uma caixa. Nessa caixa devemos criar um nome único para o nosso Storage Account. Depois pressionar o botão `Enter`.

5. Depois disso, devemos criar um novo `Resource Group`

6. E enfim, devemos escolher uma região onde ficará hospedado a nossa aplicação. O ideal é escolher uma região mais próxima no nosso país.

Para entender melhor os passos 4-6, observem o gif abaixo:

[![gif-15.gif](https://s3.gifyu.com/images/gif-15.gif)](https://gifyu.com/image/E04e)

7. Ao realizar os passos acima, ele criará um Storage Account para nós. Agora, clique com o botão direito no Storage Account criado e depois clique em `Configure Static Website`. 

8. Crie um documento: `index.html` e depois clique em `Enter`.

9. E novamente crie um documento chamado: `index.html` e depois clique em `Enter`.

Vejam os passos: 7-9 no gif abaixo:

[![gif-16.gif](https://s3.gifyu.com/images/gif-16.gif)](https://gifyu.com/image/E06S)

Ao finalizar os passos: 1 ao 9 estaremos pronto para enviar os arquivos da pasta `dist` e enfim colocar a nossa aplicação na nuvem! Vamos dar continuidade!







