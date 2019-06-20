## Desenvolvendo o Botão '+/-'

Agora vamos desenvolver o botão **+/-** da Calculadora, para isso, altere os seguintes códigos.

Na tag **template** crie a função **sinal**:


```vue
<template>
  <div class="calculadora">
    <div v-on:click="sinal" class="botao">+/-</div>
  </div>
</template>
```

Na tag **script** desenvolva o método **sinal**

```vue
<script>
  sinal() {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`;
    }
</script>
```

Estamos usando nessa operação o **chartAt** e o **slice**. Para entender melhor esses métodos, recomendo as leituras abaixo:

* **[chartAt](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)**
* **[slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)**

Se executar a calculadora, você observará que o sinal de +/- estão funcionando devidamente.

[![Screen-Shot-06-19-19-at-03-06-PM.png](https://i.postimg.cc/tJQwQ200/Screen-Shot-06-19-19-at-03-06-PM.png)](https://postimg.cc/ygjv0hYn)

Vamos continuar!