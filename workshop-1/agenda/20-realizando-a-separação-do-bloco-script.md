## Realizando a separação do bloco script

O procedimento será muito parecido com o que fizemos no arquivo `calculadora.css`. Abram o arquivo `index.vue` e copie todo o bloco de script e cole no arquivo `Calculadora.js`

O arquivo `Calculadora.js`, ficará da seguinte forma:

```js
/**
 * Arquivo: src/components/Calculadura.js
 * Data: 20/06/2019
 * Author: Glaucia Lemos
 * Descrição: arquivo responsável por tratar toda a lógica da Calculadora.
 */

export default {
  name: 'Calculadora',
  data() {
    return {
      numeroAnterior: null,
      valorCorrente: '',
      operador: null,
      operadorClicado: false,
    };
  },

  methods: {
    // Método responsável por limpar o display da 'Calculadora'
    limpar() {
      this.valorCorrente = '';
    },

    /*
    * Método responsável por colocar o sinal '-' ou '+' para realização de operações
    * matemáticas especiais.
    */
    sinal() {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`;
    },

    // Método responsável por realizar operações com 'porcentagem':
    porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
    },

    // Método responsável por juntar os números no display da Calculadora:
    juntarNumeros(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = '';
        this.operadorClicado = false;
      }
      this.valorCorrente = `${this.valorCorrente}${numero}`;
    },

    // Método responsável por adicionar 'ponto' no display da Calculadora:
    ponto() {
      if (this.valorCorrente.indexOf('.') === -1) {
        this.juntarNumeros('.');
      }
    },

    // Método responsável por 'resetar' o valor na Calculadora:
    setarValor() {
      this.numeroAnterior = this.valorCorrente;
      this.operadorClicado = true;
    },

    // Método responsável por realizar a operação da 'divisão' da Calculadora
    dividir() {
      this.operador = (a, b) => a / b;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'multiplicação' da Calculadora
    multiplicar() {
      this.operador = (a, b) => a * b;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'diminuir' da Calculadora
    diminuir() {
      this.operador = (a, b) => a - b;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'adição' da Calculadora
    somar() {
      this.operador = (a, b) => a + b;
      this.setarValor();
    },

    // Método responsável por apresentar o resultado das operações na Calculadora
    resultado() {
      this.valorCorrente = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorCorrente),
      )}`;
      this.numeroAnterior = null;
    },
  },
};
```

Agora, volte ao arquivo `index.vue` e vamos referenciar o arquivo `Calculadora.js`, dentro da tag script, da seguinte forma:

```vue
<script src="./Calculadora.js"></script>
```

Execute a aplicação e veja se está tudo funcionando. Se sim, terminamos! 😊