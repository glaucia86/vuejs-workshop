## Alterando a estrutura do projeto & router

Notem que, para realizar a manuntenção do projeto está muito complexo e com muitas linhas de código. Para isso, vamos alterar a estrutura do projeto. Para isso, façam o seguinte:

1 - Criam uma pasta chamada: `components -> pages -> CreateTodo` e dentro dessa pasta crie os arquivos: `index.vue` e `CreateTodo.js`.

2 - Criam uma pasta chamada: `components -> pages -> Todo` e dentro dessa pasta crie os arquivos: `index.vue` e `Todo.js`.

3 - Criam uma pasta chamada: `components -> pages -> TodoList` e dentro dessa pasta crie os arquivos: `index.vue` e `TodoList.js`.

4 - Criam uma pasta chamada: `src -> middlewares` e dentro dessa pasta crie o arquivo: `router.js`.

5 - Vamos baixar o pacote: `vue-router`. Para isso, executem o seguinte comando abaixo:

```
> npm i vue-router
```

Ótimo! Agora vamos desenvolver o arquivo `router.js`. Inclua o seguinte bloco de código abaixo:

`arquivo: router.js`

```javascript

/**
 *
 * Arquivo: src/middlewares/router.js
 * Data: 15/07/2019
 * Descrição: arquivo responsável por lidar com todas as rotas da aplicação.
 * Autora: Glaucia Lemos
 *
 */

import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '../components/pages/TodoList/TodoList';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/todo-list', name: 'todo-list', component: TodoList },
  ],
});

export default router;

```

Vamos agora extrair os arquivos, assim como no workshop-1. Vamos começar pelo arquivo: `TodoList.vue`

`arquivo: TodoList.js`

```javascript
// @ts-nocheck

/**
 * Arquivo: src/components/pages/TodoList/TodoList.js
 * Data: 15/07/2019
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'TodoList'
 * Autora: Glaucia Lemos
 */

import sweetAlert from 'sweetalert';
import Todo from '../Todo/index';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    excluirTodo(todo) {
      sweetAlert({
        title: 'Você tem certeza que deseja excluir a Tarefa?',
        text: 'Atenção! Esta Tarefa será Excluída!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((removerTodo) => {
        if (removerTodo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos.splice(todoIndex, 1);
          sweetAlert('Excluído!', 'Sua Tarefa foi Excluída com Sucesso!', {
            icon: 'success',
          });
        } else {
          sweetAlert('Cancelado', 'Retornar para a Lista de Tarefas', 'error');
        }
        return false;
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].concluido = true;
      sweetAlert('Sucesso!', 'Parabéns! A sua Tarefa está Completa!', 'success');
    },
  },
};

```

Agora alterem o arquivo `index.vue` do componente: `TodoList`

`arquivo: TodoList -> index.vue`

```javascript
<template>
  <div>
    <p class="tarefas">Tarefa(s) Concluída(s):
      {{ todos.filter(todo => { return todo.concluido === true }).length }}
    </p>
    <p class="tarefas">Tarefa(s) Pendente(s):
      {{ todos.filter(todo => { return todo.concluido === false }).length }}
    </p>
    <todo v-on:excluir-todo="excluirTodo(todo)"
          v-on:complete-todo="completeTodo"
          v-for="todo in todos" :todo.sync="todo"
          v-bind:key="todo.value">
    </todo>
  </div>
</template>

<script src="./TodoList" />

<style scoped>

p.tarefas {
  text-align: center;
}
</style>

```

Vamos fazer com os demais arquivos agora!

`arquivo: Todo.js`

```javascript
/**
 * Arquivo: src/components/pages/CreateTodo/CreateTodo.js
 * Data: 15/07/2019
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'CreateTodo'.
 * Autora: Glaucia Lemos
 */

export default {
  name: 'CreateTodo',
  data() {
    return {
      textoTitulo: '',
      textoProjeto: '',
      foiCriado: false,
    };
  },
  methods: {
    abrirForm() {
      this.foiCriado = true;
    },
    fecharForm() {
      this.foiCriado = false;
    },
    enviarForm() {
      if (this.textoTitulo.length > 0 && this.textoProjeto.length > 0) {
        const titulo = this.textoTitulo;
        const projeto = this.textoProjeto;

        this.$emit('create-todo', {
          titulo,
          projeto,
          concluido: false,
        });
        this.textoTitulo = '';
        this.textoProjeto = '';
        this.foiCriado = false;
      }
    },
  },
};

```

`arquivo: CreateTodo -> index.vue`

```javascript
<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-on:click="abrirForm" v-show="!foiCriado">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="foiCriado">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Título</label>
            <input v-model="textoTitulo" type="text">
          </div>
          <div class="field">
            <label>Projeto</label>
            <input v-model="textoProjeto" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="enviarForm()">Adicionar</button>
            <button class="ui basic red button" v-on:click="fecharForm()">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CreateTodo" />

```

`arquivo: Todo.js`

```javascript
/**
 * Arquivo: src/components/pages/Todo/Todo.js
 * Data: 15/07/2019
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'Todo'.
 * Autora: Glaucia Lemos
 */

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      ehEditavel: false,
    };
  },

  methods: {
    // ==> Método responsável por alterar se uma determinada está concluída ou pendente
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
    },
    // ==> Método responsável por abrir o form do 'Todo-List'
    abrirForm() {
      this.ehEditavel = true;
    },
    // ==> Método responsável por fechar o form do 'Todo-List'
    fecharForm() {
      this.ehEditavel = false;
    },
    // ==> Método responsável por excluir um 'Todo-List'
    excluirTodo(todo) {
      this.$emit('excluir-todo', todo);
    },
  },
};
```

`arquivo: Todo -> index.vue`

```javascript
<template>
  <div class="ui centered card">
    <!-- Aqui não irá mostrar a edição do 'Todo-List' -->
    <div class="content" v-show="!ehEditavel">
      <div class="header">{{ todo.titulo }}</div>
      <div class="meta">{{ todo.projeto }}</div>
      <div class="extra content">
        <!-- Criando o método 'abrirForm' -->
        <span class="right floated edit icon" v-on:click="abrirForm">
          <i class="edit icon"></i>
        </span>
        <!-- Adicionando aqui o botão 'exclusão' do Todo-List -->
        <span class="right floated trash icon" v-on:click="excluirTodo(todo)">
          <i class="trash icon"></i>
        </span>
      </div>
    </div>
    <!-- Aqui é a parte que a parte da ediçaõ aparecerá -->
    <div class="content" v-show="ehEditavel">
      <div class="ui form">
        <div class="field">
          <label>Título</label>
          <input type="text" v-model="todo.titulo">
        </div>
        <div class="field">
          <label>Projeto</label>
          <input type="text" v-model="todo.projeto">
        </div>
        <div class="ui two button attached buttons">
          <!-- Criando o método 'fecharForm' -->
          <button class="ui basic blue button" v-on:click="fecharForm">Fechar X</button>
        </div>
      </div>
    </div>
    <div
      class="ui bottom attached green basic button"
      v-show="!ehEditavel && todo.concluido"
      disabled
    >Concluído</div>
    <div
      class="ui bottom attached red basic button"
      v-on:click="completeTodo(todo)"
      v-show="!ehEditavel && !todo.concluido"
      >Pendente</div>
  </div>
</template>

<script src="./Todo" />

```

Vai começar a aparecer uns erros, mas normal! Vamos dar continuidade! Abram agora o arquivo `App.vue` e inclua a seguinte tag: `<router-view></router-view>`

`App.vue`

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
    <router-view></router-view>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert';
import TodoList from './components/pages/TodoList/index';
import CreateTodo from './components/pages/CreateTodo/index';
export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [
        {
          titulo: 'Todo A',
          projeto: 'Projeto A',
          concluido: false,
        },
        {
          titulo: 'Todo B',
          projeto: 'Projeto B',
          concluido: true,
        },
        {
          titulo: 'Todo C',
          projeto: 'Projeto C',
          concluido: false,
        },
        {
          titulo: 'Todo D',
          projeto: 'Projeto D',
          concluido: false,
        },
      ],
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

E finalmente vamos alterar o arquivo `main.js`

`arquivo: main.js`

```javascript
// @ts-nocheck
/**
 * Arquivo: main.js
 * Data: 15/07/2019
 * Descrição: arquivo responsável por lidar com toda a lógica de execução da app.
 * Author: Glaucia Lemos
 */

import Vue from 'vue';
import router from './middlewares/router';
import App from './App';

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
});

```

Agora sim. Terminamos a nossa aplicação. Porém, queremos que ela esteja hospedada na nuvem! E é justamente sobre essa parte que trataremos na próxima parte!