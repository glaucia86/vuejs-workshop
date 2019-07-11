## Alterando as configurações no arquivo 'App.vue'

Vamos acertar o erro do passo anterior. Para isso, abram o arquivo `App.vue` e alteram para o seguinte código

```javascript
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList,
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
Ao executar novamente a aplicação notará que ela estará executando sem nenhum erro. 

Show! Vamos agora começar a desenvolver o nosso primeiro componente! 