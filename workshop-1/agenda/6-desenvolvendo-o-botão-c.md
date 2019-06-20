## Desenvolvendo o Botão 'C' 

O botão limpar, que está representado pela letra C na Calculadora, será desenvolvido da seguinte maneira. 

Vá até a tag de template e inclua o código abaixo:

```vue
<template>
  <div class="calculadora">
    <div class="display">{{valorCorrente || '0'}}</div>
    <div @click="limpar" class="botao"></div>
    (...)
  </div>
</template>
```

Notem que estamos incluindo o **@click**. Isso representa que começaremos a trabalhar com Manipulação de Eventos no Vue.js. Se desejarem aprender um pouco mais a respeito, bastam acessar a Documentação do Vue.js que trata justamente dessa parte - **[AQUI](https://br.vuejs.org/v2/guide/events.html)**

Para todos os botões que envolverão click, usaremos esse recurso. Que pode ser:

* @click=""
* v-on:click=""

Das duas formas estão corretas. O mais utilizado é: **v-on:click**. Então, vamos utilizar a forma mais corriqueira.

Vamos fazer o seguinte agora, vamos colocar todas as ações do **v-on:click** em todos os botões agora:

```vue
<template>
  <div class="calculadora">
    <div class="display">{{valorCorrente || '0'}}</div>
    <div v-on:click="limpar" class="botao">C</div>
    <div v-on:click="" class="botao">+/-</div>
    <div v-on:click="" class="botao">%</div>
    <div v-on:click="" class="botao operadores">÷</div>
    <div v-on:click="" class="botao">7</div>
    <div v-on:click="" class="botao">8</div>
    <div v-on:click="" class="botao">9</div>
    <div v-on:click="" class="botao operadores">x</div>
    <div v-on:click="" class="botao">4</div>
    <div v-on:click="" class="botao">5</div>
    <div v-on:click="" class="botao">6</div>
    <div v-on:click="" class="botao operadores">-</div>
    <div v-on:click="" class="botao">1</div>
    <div v-on:click="" class="botao">2</div>
    <div v-on:click="" class="botao">3</div>
    <div v-on:click="" class="botao operadores">+</div>
    <div v-on:click="" class="botao zero">0</div>
    <div v-on:click="" class="botao">.</div>
    <div v-on:click="" class="botao operadores"> = </div>
  </div>
</template>
```
Agora vamos desenvolver a lógica do 'limpar'. Vá até a tag **script** e inclua o seguinte método abaixo:

```vue
<script>
export default {
  data() {
    return {
      valorCorrente: '',
      numeroAnterior: null,
      operador: null,
      operadorClicado: false,
    };
  },
  methods: {
    limpar() {
      this.valorCorrente = '';
    }
  }
</script>
```
Execute a aplicação e veja se vai funcionar!