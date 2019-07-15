## Inclusão do SweetAlert no arquivo 'TodoList.vue'

Vamos incluir o sweetAlert também no arquivo `TodoList.vue`. Altere o código conforme abaixo:

`arquivo: TodoList.vue`

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

<script>
import sweetAlert from 'sweetalert';
import Todo from './Todo';

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
      })
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].concluido = true;
      sweetAlert('Sucesso!', 'Parabéns! A sua Tarefa está Completa!', 'success');
    },
  },
};

</script>

<style scoped>

p.tarefas {
  text-align: center;
}
</style>

```

Muitas alterações não é mesmo?! Mas, necessárias para deixar o UI da nossa aplicação mais linda!