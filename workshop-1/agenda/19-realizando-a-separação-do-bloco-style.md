## Realizando a separação do bloco style

Abram o arquivo `index.vue` e copiem todo o conteúdo contido na tag `<style></style>` e cole no arquivo `calculadora.css`. 

O arquivo `calculadora.css` deverá ficar da seguinte maneira:

```css
.calculadora {
  margin: 0 auto;
  width: 350px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}

.zero {
  grid-column: 1 / 3;
}

.botao {
  background-color: #f2f2f2;
  border: 1px solid #999;
}

.operadores {
  background-color: orange;
  color: white;
}
```

Já no arquivo `index.vue`, vamos agora realizar a referência do arquivo `calculadora.css` dentro da tag `<style></style>` e notem como deve ficar:

```vue
<style src="./calculadora.css" scoped />
```

Execute a aplicação e veja se está tudo funcionando. Se sim. Vamos dar continuidade!