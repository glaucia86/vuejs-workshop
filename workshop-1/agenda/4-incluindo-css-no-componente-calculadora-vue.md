## Incluindo Css no Componente Calculadora.vue

Abram o arquivo **Calculadora.vue** e alterem conforme o código abaixo:

```vue
<template>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
```

O arquivo ficará ‘cru’ por assim dizer mesmo. Pois nessa primeira parte, focaremos nas tags: template e style. Inclusive, já peço para que vocês deem uma olhada na excelente documentação do Vue.js — que está totalmente em português!

[![vue-js](https://thepracticaldev.s3.amazonaws.com/i/pgr4e0iy8wsmrw070uho.PNG)](https://br.vuejs.org/v2/guide/index.html)

Show! Agora, vamos começar a programar! Crie na tag **style** a classe: **.calculadora** e faça algumas alterações na tag **template**

```vue
<template>
  <div class="calculadora">
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
</style>
```

Depois de realizar essas alterações vocês perceberão no browser algumas mudanças que dá a entender que estamos desenvolvendo uma Calculadora:

![Image-3](https://cdn-images-1.medium.com/max/2025/1*Wp6TCcBUuMNs-Ejr0CXKIQ.png)

Vamos continuar focando no Css! Vamos tratar o display principal da nossa Calculadora. Para isso, vamos criar uma outra classe chamada: .display e alterar o código conforme abaixo: **(alterações nas linhas 3 e 42–46)**

```vue
<template>
  <div class="calculadora">
    <div class="display">1.565854</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
    <div>teste</div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
</style>
```

E vejam o resultado abaixo:

![Image-4](https://cdn-images-1.medium.com/max/2025/1*o1vwCreiJyFdOHoo7PovGg.png)

Observem que já conseguimos mentalizar e ver que de fato temos um display dos resultados da nossa Calculadora ganhando corpo. Mas, vamos continuar!

Vamos alterar também o font-size da nossa Calculadora. Volte na classe .calculadora e inclua dentro da classe a seguinte linha

```vue
font-size: 40px;
```

E vejam o resultado:

![Image-5](https://cdn-images-1.medium.com/max/2025/1*vHX9uCECHnfYda-88J_0wA.png)

Agora, vamos ordenar os botões da Calculadora e criar uma classe chamada: **.zero** e sigam conforme o código:

```vue
<template>
  <div class="calculadora">
    <div class="display">0</div>
    <div >C</div>
    <div >+/-</div>
    <div >%</div>
    <div>÷</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>x</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>-</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>+</div>
    <div class="zero">0</div>
    <div>.</div>
    <div>=</div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
</style>
```

E olhem o resultado:

![Image-5](https://cdn-images-1.medium.com/max/2025/1*Z742qyGcOzTZmXCGZHsCcw.png)

Olha a nossa Calculadora já ganhando forma! Mas, começar a trabalhar com os botões. Para isso, vamos criar uma classe chamada: .botoes e vejam como vai ficar o código agora:

```vue
<template>
  <div class="calculadora">
    <div class="display">0</div>
    <div class="botao">C</div>
    <div class="botao">+/-</div>
    <div class="botao">%</div>
    <div class="botao">÷</div>
    <div class="botao">7</div>
    <div class="botao">8</div>
    <div class="botao">9</div>
    <div class="botao">x</div>
    <div class="botao">4</div>
    <div class="botao">5</div>
    <div class="botao">6</div>
    <div class="botao">-</div>
    <div class="botao">1</div>
    <div class="botao">2</div>
    <div class="botao">3</div>
    <div class="botao">+</div>
    <div class="botao zero">0</div>
    <div class="botao">.</div>
    <div class="botao">=</div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.botao {
  background-color: #f2f2f2;
  border: 1px solid #999;
}
</style>
```

E o resultado:

![Image-6](https://cdn-images-1.medium.com/max/2025/1*9laMqGm-9TkAetNwPVs4OQ.png)

Estamos terminando a parte do css. Precisamos redimensionar essa Calculadora. Como podem ver, ela está ocupando toda página! Para isso, façam as alterações necessárias conforme o código abaixo:

```vue
<template>
  <div class="calculadora">
    <div class="display">0</div>
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
    <div class="botao">=</div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  margin: 0 auto;
  width: 350px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.botao {
  background-color: #f2f2f2;
  border: 1px solid #999;
}
.operadores {
  background-color: orange;
  color: white;
}
</style>
```

E vejam o resultado final da nossa Calculadora!

![Image-8](https://cdn-images-1.medium.com/max/2025/1*cAWgoPhl_LVJpIPbwcp32Q.png)

Ficou linda não é mesmo?! 😍
