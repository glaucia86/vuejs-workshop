## Desenvolvendo o Botão Pendente/Concluído

Estamos quase chegando na reta final do desenvolvimento do nosso Todo-List. Só falta um pequeno detalhe... precisamos alterar uma determinada tarefa quando ela estiver concluída ou não. Vamos justamente desenvolver essa parte na aplicação.

Para isso, abram o arquivo `Todo.vue` e vamos criar o método: `completeTodo`. Inclua o seguinte código:

`arquivo: Todo.vue`

```javascript
<script>

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      ehEditavel: false,
    };
  },

  methods: {
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
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
    },
  },
```

Ótimo. Agora, abram o Componente: `TodoList.vue` e vamos desenvolver o mesmo método: `completeTodo` nesse arquivo:

`arquivo: TodoList.vue`

```javascript

<script>

import Todo from './Todo';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    excluirTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].foiCriado = true;
    },
  },
};

</script>
``` 

Agora, vamos invocar esse método na tag `<template>`. Inclua o bloco abaixo:

`arquivo: Todo.vue`

```javascript
<template>
  <div class="ui centered card">
    <!-- Aqui não irá mostrar a edição do 'Todo-List' -->
    <div class="content" v-show="!ehEditavel">
      <div class="header">{{ todo.textoTitulo }}</div>
      <div class="meta">{{ todo.textoProjeto }}</div>
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
          <input type="text" v-model="todo.textoTitulo">
        </div>
        <div class="field">
          <label>Projeto</label>
          <input type="text" v-model="todo.textoProjeto">
        </div>
        <div class="ui two button attached buttons">
          <!-- Criando o método 'fecharForm' -->
          <button class="ui basic blue button" v-on:click="fecharForm">Fechar X</button>
        </div>
      </div>
    </div>
    <div
      class="ui bottom attached green basic button"
      v-show="!ehEditavel && todo.foiCriado"
      disabled
    >Concluído</div>
    <div
      class="ui bottom attached red basic button"
      v-on:click="completeTodo(todo)"
      v-show="!ehEditavel && !todo.foiCriado"
      >Pendente</div>
  </div>
</template>
```
Ao executar a aplicação veremos que status da tarefa alterará. Vejam abaixo:

[![gif-10.gif](https://i.postimg.cc/k4j6Z581/gif-10.gif)](https://postimg.cc/N9Hj2Bdm)