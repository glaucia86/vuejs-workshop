## Desenvolvendo o Botão Exclusão ao Componente 'Todo'

Vamos agora criar o ícone do botão de exclusão do Todo-List. Para isso, abram o arquivo abaixo e façam a alteração no código:

`arquivo: Todo.vue`

```javascript
<template>
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
</template>
```

Não coloquei todo o código da tag `<template>` do arquivo `Todo.vue`. Bastam incluir o bloco do span e executar o código. Ao verificar a aplicação você já irá visualizar o ícone da lixeira, conforme a imagem abaixo:

[![Screen-Shot-07-15-19-at-03-03-PM.png](https://i.postimg.cc/9fr3JhwC/Screen-Shot-07-15-19-at-03-03-PM.png)](https://postimg.cc/67J1pFhm)

Notem que, dentro da tag `span` temos a chamada de um método chamado `excluirTodo(todo)`. Vamos desenvolver agora a lógica da exclusão desse botão!

Para isso, vamos até a tag `<script>` e incluam o código abaixo:

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
  },
};

</script>
```

Observem que, desenvolvemos o método `excluirTodo(todo)` e a implementação chega a ser simples demais. Porém, notem que iremos dar um emit nesse evento, para que assim, possamos excluir o Todo-List. Esse `excluir-todo`, incluiremos no arquivo `TodoList.vue`. Vamos fazer isso agora!

Para isso, abram o arquivo e inclua o código abaixo:

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
  },
};

</script>
``` 

Ótimo! Fizemos um **[splice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)**. Esse método no JavaScript, nos ajuda a alterar um determinado item de uma lista, onde podemos adicionar ou remover itens/elementos dessa lista!

Agora, vamos implementar na `<template>` esse evento!

`arquivo: TodoList.vue`

```javascript
<template>
  <div>
    <p>Tarefa(s) Concluída(s):
      {{ todos.filter(todo => { return todo.foiCriado === true }).length }}
    </p>
    <p>Tarefa(s) Pendente(s):
      {{ todos.filter(todo => { return todo.foiCriado === false }).length }}
    </p>
    <todo v-on:excluir-todo="excluirTodo(todo)"
          v-for="todo in todos"
          v-bind:todo="todo"
          v-bind:key="todo.value">
    </todo>
  </div>
</template>
``` 

Show! Agora executem a aplicação e vejam se está acontecendo a exclusão do TodoList, conforme o gif abaixo:

[![gif-8.gif](https://s3.gifyu.com/images/gif-8.gif)](https://gifyu.com/image/ERO7)

Lindo, não é mesmo?! Agora vamos seguir com o nosso workshop e desenvolver o botão para adicionar um novo Todo-List!