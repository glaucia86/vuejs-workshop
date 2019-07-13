## Criando Propriedade e Método 'Editar' ao Componente 'Todo.vue'

Vamos agora criar uma propriedade que será responsável pela edição do nosso Todo-List!

Para isso, retorne ao arquivo `Todo.vue` e vamos fazer algumas alterações no arquivo conforme o código abaixo dentro da tag `<template>`:

`arquivo: Todo.vue`

```javascript
<template>
  <div class="ui centered card">
    <!-- Aqui não irá mostrar a edição do 'Todo-List' -->
    <div class="content" v-show="!ehEditavel">
      <div class="header">
        {{ todo.textoTitulo }}
      </div>
      <div class="meta">
        {{ todo.textoProjeto }}
      </div>
      <div class="extra content">
        <!-- Criando o método 'abrirForm' -->
        <span class="right floated edit icon" v-on:click="abrirForm">
          <i class="edit icon"></i>
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
    <div class="ui bottom attached green basic button" v-show="todo.foiCriado">
      Concluído
    </div>
    <div class="ui bottom attached red basic button" v-show="!todo.foiCriado">
      Pendente
    </div>
  </div>
</template>
```
Notem que, dentro da tag `<template>` criamos `divs` que serão responsáveis por mostrar a edição do nosso Todo-List. Outro ponto a ser observado é que, criamos dois métodos chamados: `abrirForm` e `fecharForm`. E ele não tá permitindo de executar corretamente a nossa aplicação.

Vamos implementar esses métodos agora? Vamos implementar esses métodos na tag `<script>`, conforme o código abaixo:

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
    abrirForm() {
      this.ehEditavel = true;
    },
    fecharForm() {
      this.ehEditavel = false;
    },
  },
};

</script>
```

Executem a aplicação e façam conforme o gif abaixo:

[![gif-609f659244fc0ae08.gif](https://s3.gifyu.com/images/gif-609f659244fc0ae08.gif)](https://gifyu.com/image/E83f)

Notem que, no ato que você clica no botão do ícone 'editar' aparecerá um botão 'Fechar'.

Lindo não é mesmo?!

Vamos editar todos os itens do nosso Todo-List. Observem o gif abaixo:

[![gif-7.gif](https://s3.gifyu.com/images/gif-7.gif)](https://gifyu.com/image/E83o)

Estamos quase lá! Vamos continuar!