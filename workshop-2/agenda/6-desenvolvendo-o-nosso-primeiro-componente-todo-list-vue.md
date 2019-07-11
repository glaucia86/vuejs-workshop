## Desenvolvendo o nosso primeiro Componente 'TodoList.vue'

Abram novamente o arquivo `TodoList.vue` e vamos começar a fazer algumas alterações significativas nele!

Para isso, inclua o seguinte bloco de código abaixo:

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
};

</script>

```

Notem que, o Vue.js é formado por 3 estruturas:

* **template:** onde se concentra toda a parte de HTML. É aqui que também incluiremos algumas diretivas do Vue.js.

* **script:** onde está toda a lógica da nossa aplicação e onde desenvolveremos a parte do JavaScript.

* **script:** onde está toda a parte do .css!

Simples não é mesmo?! É por conta dessa estrutura simples que o Vue.js tem ganhado muitos adeptos ao framework/biblioteca!

Vamos continuar com o desenvolvimento da nossa aplicação!

Para visualizar a lista que criamos acima, bastam retornar ao arquivo `App.vue` e alterar alterar o código como abaixo:

`arquivo: App.vue`

```javascript
<template>
  <div id="app">
    <todo-list></todo-list>
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

```

Ao incluirmos a tag: `<todo-list></todo-list>` ajudará a renderizar o nosso componente: `TodoList`. Agora, ao executar a aplicação deverá aparecer a lista criada.

[![Screen-Shot-07-11-19-at-08-50-PM.png](https://i.postimg.cc/KvHNX54c/Screen-Shot-07-11-19-at-08-50-PM.png)](https://postimg.cc/QHc511pv)

Se estiver como a imagem acima, você está indo super bem. E assim, poderemos dar continuidade ao desenvolvimento da nossa aplicação.

Vamos nessa!