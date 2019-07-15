## Inclusão do SweetAlert no arquivo 'App.vue'

Bom, nessa etapa do workshop eu chamo de realizar perfumaria na aplicação. Vamos incluir alguns eventos relacionados ao SweetAlert para deixar a nossa aplicação mais linda!

Antes, vamos instalar o sweetAlert na nossa aplicação. Abram o prompt de comando e executem o seguinte comando:

```
> npm i sweetalert
```

Depois que instalar, notem que esse pacote aparecerá no arquivo `package.json`. Bom, agora abram o arquivo `App.vue` e inclua o seguinte bloco de código:

`arquivo: App.vue`

```javascript
<template>
  <div id="app">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header"> Aplicação Todo List com Vue.js 2</h1>
        <h2 class="ui inverted header">Glaucia Lemos
          <div class="sub header">Regional Cloud Advocate at Microsoft</div>
        </h2>
        <h3 class="ui inverted header">Rio de Janeiro, Brasil</h3>
        <a class="tiny ui youtube button" type="button" href="https://www.youtube.com/user/l32759">
          <i class="youtube icon"></i>
          YouTube
        </a>
        <a class="tiny ui linkedin button" type="button" href="https://www.linkedin.com/in/glaucialemos/">
          <i class="linkedin icon"></i>
          LinkedIn
        </a>
        <a class="tiny ui twitter button" type="button" href="https://twitter.com/glaucia_lemos86">
          <i class="twitter icon"></i>
          Twitter
        </a>
      </div>
    </div>
    <br />
    <div class="ui three column centered grid">
      <div class="column">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [{
        titulo: 'Todo A',
        projeto: 'Projeto A',
        concluido: true,
      }, {
        titulo: 'Todo B',
        projeto: 'Projeto B',
        concluido: false,
      }, {
        titulo: 'Todo C',
        projeto: 'Projeto C',
        concluido: true,
      }, {
        titulo: 'Todo D',
        projeto: 'Projeto D',
        concluido: false,
      }],
    };
  },
  methods: {
    createTodo(novoTitulo) {
      this.todos.push(novoTitulo);
      sweetAlert('Sucesso!', 'Nova Tarefa Adicionada.', 'success');
    },
  },
};
</script>
```