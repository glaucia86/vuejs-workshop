## Alterando o componente no Projeto

Vamos alterar algumas coisas no projeto. Uma delas é alterar o nome do componente para ‘Calculadora’.

Vá até: **src -> components**

Ali, altere de **HelloWorld** para **Calculadora.vue**

![Image-2](https://cdn-images-1.medium.com/max/900/1*l-EukyF1nsBwSaLvMcHvtQ.png)

Show! Agora abre o arquivo **App.vue** e vamos fazer as alterações necessárias, senão não conseguiremos executar a aplicação. No final o aquivo **App.vue** ficará da seguinte maneira:

```vue
//==> App.vue

<template>
  <div id="app">
    <Calculadora/>
  </div>
</template>

<script>
import Calculadora from './components/Calculadora';
export default {
  name: 'App',
  components: {
    Calculadora,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

Agora, vamos focar no arquivo **Calculadora.vue**, pois é onde toda a brincadeira vai acontecer! 😉