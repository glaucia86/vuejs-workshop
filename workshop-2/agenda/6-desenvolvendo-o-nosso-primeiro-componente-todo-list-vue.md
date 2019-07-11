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

<style scoped>
</style>

```

Notem que, o Vue.js é formado por 3 estruturas:

* **template:** onde se concentra toda a parte de HTML. É aqui que também incluiremos algumas diretivas do Vue.js.

* **script:** onde está toda a lógica da nossa aplicação e onde desenvolveremos a parte do JavaScript.

* **script:** onde está toda a parte do .css!