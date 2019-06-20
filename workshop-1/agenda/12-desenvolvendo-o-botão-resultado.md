## Desenvolvendo o Botão '=' (resultado)

Antes de desenvolver as 4 operações, vamos desenvolver o botão do resultado '='. Para isso,
inclua os seguintes blocos de código:

```vue
<template>
  <div class="calculadora">
    <div v-on:click="resultado" class="botao operadores"> = </div>  
  </div>
</template>
```

```vue
<script>
  resultado() {
      this.valorCorrente = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorCorrente),
      )}`;
      this.numeroAnterior = null;
    },
</script>
```

Agora sim, podemos além de desenvolver as 4 operações matemáticas e já testando se estão funcionando devidamente. Vamos continuar que tá quase no final.