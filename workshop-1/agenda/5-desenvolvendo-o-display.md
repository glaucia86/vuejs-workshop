## Desenvolvendo o 'Display'

Abram o **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=devto-blog-gllemos)**. Após isso, abram a pasta: **src** e depois o arquivo **Calculadora.vue**

Vamos focar na parte das tags de **script**.
É justamente aí que toda a lógica da nossa Calculadora acontecerá! 

Digitem o código abaixo:

```vue
<script>

export default {
  data() {
    return {
      valorCorrente: '123',
    };
  },
};

</script>
```
Aqui estamos criando uma variável que será responsável pelo 'Display' da nossa Calculadora.

Feito isso, já deixem executando a aplicação ao lado, para que possamos acompanhar o desenvolvimento e se está tudo correndo bem.

Na seção template, inclua a seguinte linha de código:

```vue
<template>
  <div class="calculadora">
    <div class="display">{{valorCorrente || '0'}}</div>
    <div class="botao">C</div>
    <div class="botao">+/-</div>
    <div class="botao">%</div>
    <div class="botao operadores">÷</div>
    <div class="botao">7</div>
    <div class="botao">8</div>
    <div class="botao">9</div>
    <div class="botao operadores">x</div>
    <div class="botao">4</div>
    <div class="botao">5</div>
    <div class="botao">6</div>
    <div class="botao operadores">-</div>
    <div class="botao">1</div>
    <div class="botao">2</div>
    <div class="botao">3</div>
    <div class="botao operadores">+</div>
    <div class="botao zero">0</div>
    <div class="botao">.</div>
    <div class="botao"> = </div>
  </div>
</template>
```
Após isso, execute a aplicação e deverá aparecer da seguinte forma como a imagem abaixo:

[![Screen-Shot-06-19-19-at-02-27-PM.png](https://i.postimg.cc/W4r9r6L4/Screen-Shot-06-19-19-at-02-27-PM.png)](https://postimg.cc/5H4qWztc)

O display da nossa Calculadora já está funcionando. Agora, vamos desenvolver a lógica dos demais botões!