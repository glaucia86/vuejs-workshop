## Desenvolvendo o Botão 'x' (multiplicar)

Inclua os seguintes códigos abaixo:

```vue
<template>
  <div class="calculadora">
    <div v-on:click="multiplicar" class="botao operadores">x</div>  
  </div>
</template>
```

```vue
<script>
  multiplicar() {
      this.operador = (num1, num2) => num1 * num2;
      this.setarValor();
    },
</script>
```

Resultado...

[![vuejs-3.gif](https://s3.gifyu.com/images/vuejs-3.gif)](https://gifyu.com/image/ExVX)