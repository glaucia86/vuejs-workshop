## Desenvolvendo o Botão '-' (diminuir)

Inclua os códigos abaixo:

```vue
<template>
  <div class="calculadora">
    <div v-on:click="diminuir" class="botao operadores">-</div>  
  </div>
</template>
```

```vue
<script>
  diminuir() {
      this.operador = (num1, num2) => num1 - num2;
      this.setarValor();
    },
</script>
```

Vamos testar...

[![vuejs-4.gif](https://s3.gifyu.com/images/vuejs-4.gif)](https://gifyu.com/image/ExZz)

E estamos quase terminando...Vamos agora desenvolver o nosso último botão da Calculadora!
