## Desenvolvendo o Botão '+' (somar)

Inclua os códigos abaixo:

```vue
<template>
  <div class="calculadora">
    <div v-on:click="somar" class="botao operadores">+</div>  
  </div>
</template>
```

```vue
<script>
  somar() {
      this.operador = (num1, num2) => num1 + num2;
      this.setarValor();
    },
</script>
```
E agora, vamos testar todos os botões da nossa Calculadora! 

[![devto-gif-7.gif](https://s3.gifyu.com/images/devto-gif-7.gif)](https://gifyu.com/image/ExZT)

E enfim terminamos a nossa Calculadora! 