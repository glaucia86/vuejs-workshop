## Desenvolvendo o Botão '÷' (dividir)

Novamente, inclua o método **dividir** na tag **template** e desenvolva a lógica da divisão na tag **script**, conforme abaixo:

```vue
<template>
  <div class="calculadora">
    <div v-on:click="dividir" class="botao operadores">÷</div>  
  </div>
</template>
```

```vue
<script>
  dividir() {
      this.operador = (num1, num2) => num1 / num2;
      this.setarValor();
    },
</script>
```

Vejam o resultado no gif abaixo:

[![vuejs-2.gif](https://s3.gifyu.com/images/vuejs-2.gif)](https://gifyu.com/image/ExVB)