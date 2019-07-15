## Renderizando os dados do Componente

Agora que já realizamos algumas alterações nos arquivos: `App.vue` e `TodoList.vue` visando usar o `v-bind` para renderizar os nossos dados no Componente, vamos agora fazer algumas alterações significativas no arquivo `TodoList` dentro da tag: `<template>`. 

Inclua o bloco de código, na tag `<template>` conforme abaixo:

`arquivo: TodoList.vue`

```javascript
<template>
  <div>
    <p>Tarefa(s) Concluída(s):
      {{ todos.filter(todo => { return todo.concluido === true }).length }}
    </p>
    <p>Tarefa(s) Pendente(s):
      {{ todos.filter(todo => { return todo.concluido === false }).length }}
    </p>
    <div class="ui centered card" v-for="todo in todos" v-bind:key="todo.value">
      <div class="content">
        <div class="header">
          {{ todo.titulo }}
        </div>
        <div class="meta">
          {{ todo.projeto }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon"></i>
          </span>
        </div>
      </div>
      <div class="ui bottom attached green basic button" v-show="todo.concluido">
        Concluído
      </div>
      <div class="ui bottom attached red basic button" v-show="!todo.concluido">
        Pendente
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  props: ['todos'],
};

</script>

```

Ao executar o projeto vocês verão que a nossa aplicação está ganhando corpo. Se o seu projeto está como a imagem abaixo é porque você está indo bem! Lembrando que, caso tenha algum problema e não esteja conseguindo executar corretamente o seu projeto, não esqueça de abrir um **[ISSUE AQUI](https://github.com/glaucia86/vuejs-workshop/issues)** para que possamos te ajudar o quanto antes.

[![Screen-Shot-07-13-19-at-02-08-PM.png](https://i.postimg.cc/T1CRcWhb/Screen-Shot-07-13-19-at-02-08-PM.png)](https://postimg.cc/p55bWrfV)

Beleza! Vamos dar continuidade! 