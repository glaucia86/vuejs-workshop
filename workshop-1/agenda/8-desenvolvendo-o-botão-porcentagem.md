## Desenvolvendo o Botão '%'

A lógica sempre será essa daqui para frente: cria um método na ação do **v-on:click=""** na tag **template** e logo em seguida, desenvolvemos a lógica desse método na tag **script**.

```vue
<template>
  <div class="calculadora">
    <div v-on:click="porcentagem" class="botao">%</div>
  </div>
</template>
```

```vue
<script>
  porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
    },
</script>
```
Execute a aplicação veja se está funcionando devidamente.