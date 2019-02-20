<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <loginpage></loginpage>
  </div>
</template>

<script>
import loginpage from './components/LoginPage.vue'
import listupdate from './components/ListUpdate.vue'


export default {
  name: 'app',
  components: {
   loginpage ,
   listupdate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  background:url(./assets/images/bg.jpeg) no-repeat fixed;
  background-size: 100%;
}
</style>
