## Criando e Editando o Componente 'Todo'

Agora que temos a parte visual quase pronta, vamos organizar um pouco mais o nosso código. Para isso, vamos criar um novo componente dentro da pasta: `src -> components` o arquivo: `Todo.vue`.

Nele iremos extrair um pouco do que temos já pronto no arquivo `TodoList.vue` e colocar nesse novo arquivo. Vamos fazer isso agora!

`arquivo: Todo.vue`

```javascript
<template>
  <div class="ui centered card">
    <div class="content">
      <div class="header">
        {{ todo.textoTitulo }}
      </div>
      <div class="meta">
        {{ todo.textoProjeto }}
      </div>
      <div class="extra content">
        <span class="right floated edit icon">
          <i class="edit icon"></i>
        </span>
      </div>
    </div>
    <div class="ui bottom attached green basic button" v-show="todo.foiCriado">
      Concluído
    </div>
    <div class="ui bottom attached red basic button" v-show="!todo.foiCriado">
      Pendente
    </div>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  props: ['todo'],
};

</script>
```

Bom, nesse momento se executar a aplicação, notará que aparecerá inúmeros erros, pois precisamos colocar o biding dos datos do nosso Componente lá no arquivo `TodoList.vue`. 

Vamos retornar ao arquivo `TodoList.vue`, para realizar algumas alterações significativas!

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
    <todo v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.value"></todo>
  </div>
</template>

<script>

import Todo from './Todo';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
};

</script>
```

Notem que agora o projeto está muito melhor estruturado e melhor para realizar manutenção!

Ao executar o projeto, a aplicação continuará apresentando o mesmo conteúdo do passo anterior!

[![Screen-Shot-07-13-19-at-02-08-PM.png](https://i.postimg.cc/T1CRcWhb/Screen-Shot-07-13-19-at-02-08-PM.png)](https://postimg.cc/p55bWrfV)

Vamos prosseguir pois, já estamos quase no final!