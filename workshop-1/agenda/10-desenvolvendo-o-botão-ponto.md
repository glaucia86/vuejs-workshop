## Desenvolvendo o Botão '.' (ponto)

Toda Calculadora necessita de 'ponto', não é mesmo? No nosso caso não será diferente!
Incluem os seguintes blocos de código abaixo:

```vue
<template>
  <div class="calculadora">
    <div v-on:click="ponto" class="botao">.</div>
  </div>
</template>
```

```vue
<script>
  ponto() {
        if (this.valorCorrente.indexOf('.') === -1) {
          this.juntarNumeros('.');
        }
      },
</script>
```

Executem a aplicação, clique no botão 'ponto' e vejam o resultado:

[![Screen-Shot-06-19-19-at-02-54-PM.png](https://i.postimg.cc/SRJrVW23/Screen-Shot-06-19-19-at-02-54-PM.png)](https://postimg.cc/LgFL8gV3)