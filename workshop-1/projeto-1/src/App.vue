<template>
  <div id="app">
    <Calculadora/>
  </div>
</template>

<script>
// import Calculadora from './components/Calculadora';
import Calculadora from './components/Calculadora/index';

export default {
  name: 'App',
  components: {
    Calculadora,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
