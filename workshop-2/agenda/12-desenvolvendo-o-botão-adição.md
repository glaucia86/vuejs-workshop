## Desenvolvendo o Botão Adição ao Componente 'Todo'

Bom, como todo bom Todo-List, sempre queremos incluir novas tarefas, não é mesmo?! Bom, nessa parte do workshop, vamos justamente desenvolver essa parte no projeto.

Para deixar o nosso projeto mais organizado, vamos criar um novo Componente dentro `src -> components` chamado de `CreateTodo`.

Depois que criarem esse novo componente, vamos implementar o código abaixo:

`arquivo: CreateTodo.vue`

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

<script>

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

</script>

```

Bastante coisa não é mesmo? Mas, se vocês notarem, a lógica é muito parecida com o que já fizemos no componente `Todo.vue`. Bom, todas as vezes que criamos um novo componente, precisamos importar esse componente e para isso, vamos importar esse novo componente criado no arquivo `App.vue`

`arquivo: App.vue`

```javascript
<script>
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },

  (...)
</script>
```

E nesse mesmo arquivo, vamos criar um método para criar um novo Todo. Vamos implementar o código abaixo:

`arquivo: App.vue (dentro da tag script)`

```javascript
methods: {
    createTodo(novoTitulo) {
      this.todos.push({
        novoTitulo,
        concluido: false,
      });
    },
  },
```

Agora, para que possamos de fato ver a funcionalidade na nossa aplicação, invocar esse metodo no arquivo `App.vue` dentro da tag: `<template>`

`arquivo: App.vue`

```javascript
<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:create-todo="createTodo"></create-todo>
  </div>
</template>
``` 

Executa agora a aplicação e veja se não vai aparecer um botão de + conforme o gif abaixo:

[![gif-9.gif](https://i.postimg.cc/L4BC73gn/gif-9.gif)](https://postimg.cc/s1x4GScr)

Falta agora só mais um método! Vamos nessa!