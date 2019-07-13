## Criando Dados para o Componente: 'Todo-List'

Agora, peço que vocês abram o arquivo `App.vue`. Pois ali, vamos precisar criar 3 dados ou propriedades para o nosso componente principal.

Para isso, inclua o seguinte código abaixo, na tag `<script>`:

`arquivo: App.vue`

```javascript
<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList,
  },
  //==> 'dados' & 'propriedades' para o componente 'TodoList'
  data() {
    return {
      todos: [{
        textoTitulo: 'Todo A',
        textoProjeto: 'Projeto A',
        foiCriado: true,
      }, {
        textoTitulo: 'Todo B',
        textoProjeto: 'Projeto B',
        foiCriado: false,
      }, {
        textoTitulo: 'Todo C',
        textoProjeto: 'Projeto C',
        foiCriado: true,
      }, {
        textoTitulo: 'Todo D',
        textoProjeto: 'Projeto D',
        foiCriado: false,
      }],
    };
  },
};
</script>
```

Observam que nós criamos 3 propriedades (datas):

* **textoTitulo**: informação do título do nosso Todo-List.
* **textoProjeto**: informação relacinada ao projeto do Todo-List
* **foiCriado**: informação para identificar se aquela tarefa foi concluída ou não.

Através desses 3 dados, nós iremos usar na tag `template`,a diretiva do Vue.js: `v-bind`. 

O `v-bind` nos ajudará a substituir os dados digitados pelo usuário em tempo real para a nossa tela. Pensando em realizar um `v-bind` futuro, vamos fazer uma alteração no arquivo: `TodoList.vue`

`arquivo: TodoList.vue`

```javascript
<template>
  <div>
    <ul>
      <li>Todo List A</li>
      <li>Todo List B</li>
      <li>Todo List C</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  props: ['todos'],
};

</script>

```

Ao executar o projeto, por enquanto não veremos nenhuma alteração. Pois ainda não atribuímos o `v-bind` em nosso Componente. Vamos fazer isso no próximo passo!
