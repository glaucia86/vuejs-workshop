## Desenvolvedo a lógica para Setar os Números no Display

O desenvolvimento da Calculadora está quase terminando, notem que agora só falta desenvolver os operadores matemáticos, que são os mais fáceis para desenvolver. Mas, antes de desenvolvermos as operações, precisamos criar uma lógica para setar, por assim dizer, os números. 

Por exemplo: se desejamos realizar a soma de dois números: 10 + 5, precisaremos criar uma lógica que, quando o usuário for clicar nos botões de operação, precisará setar esses números no display, certo? Para isso, vamos incluir os seguintes blocos de código:

```vue
<script>
  setarValor() {
      this.numeroAnterior = this.valorCorrente;
      this.operadorClicado = true;
    },
</script>
```

Pronto! Isso já é mais do que suficiente! Agora sim, podemos desenvolver as 4 operações matemáticas, incluso o resultado, para enfim concluirmos a nossa Calculadora!