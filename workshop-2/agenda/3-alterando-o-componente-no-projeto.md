## Incluindo Semantic UI e SweetAlert na aplicação Vue.js

Durante o desenvolvimento da nossa aplicação, estaremos usando 2 bibliotecas de interface para deixar a nossa aplicação mais linda e com um visual de um HTML mais amigável e dinâmica. São elas:

* **[Semantic UI](https://semantic-ui.com/)**
* **[SweetAlert](https://sweetalert.js.org/)**

Para incluir ambas as bibliotecas no projeto bastam abrir no projeto o arquivo: `index.html` e incluam o seguinte bloco de código:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Todo List App Vue 2 - Glaucia Lemos</title>

    <!-- Bloco de Scripts: Jquery & Ajax -->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>

    <!-- Bloco de Estilos -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

```