## Desenvolvendo a Junção dos Números

Se vocês observarem até nesse ponto do artigo, os números não estão juntando. Para isso, vamos alterar o código da seguinte maneira na tag **template**

```vue
<template>
  <div class="calculadora">
    <div class="display">{{valorCorrente || '0'}}</div>
    <div v-on:click="limpar" class="botao">C</div>
    <div v-on:click="sinal" class="botao">+/-</div>
    <div v-on:click="porcentagem" class="botao">%</div>
    <div v-on:click="" class="botao operadores">÷</div>
    <div v-on:click="juntarNumeros('7')" class="botao">7</div>
    <div v-on:click="juntarNumeros('8')" class="botao">8</div>
    <div v-on:click="juntarNumeros('9')" class="botao">9</div>
    <div v-on:click="" class="botao operadores">x</div>
    <div v-on:click="juntarNumeros('4')" class="botao">4</div>
    <div v-on:click="juntarNumeros('5')" class="botao">5</div>
    <div v-on:click="juntarNumeros('6')" class="botao">6</div>
    <div v-on:click="" class="botao operadores">-</div>
    <div v-on:click="juntarNumeros('1')" class="botao">1</div>
    <div v-on:click="juntarNumeros('2')" class="botao">2</div>
    <div v-on:click="juntarNumeros('3')" class="botao">3</div>
    <div v-on:click="" class="botao operadores">+</div>
    <div v-on:click="juntarNumeros('0')" class="botao zero">0</div>
    <div v-on:click="" class="botao">.</div>
    <div v-on:click="" class="botao operadores"> = </div>
  </div>
</template>
```
E na tag **script** façam o seguinte:

```vue
<script>
  juntarNumeros(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = '';
        this.operadorClicado = false;
      }

      this.valorCorrente = `${this.valorCorrente}${numero}`;
    },
</script>
```

Ao executarem agora a aplicação, verão que a Calculadura já está ganhando bem mais funcionalidades do que antes. Vamos continuar, pois agora falta pouca coisa!