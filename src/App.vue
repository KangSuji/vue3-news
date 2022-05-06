<template>
  <header-view></header-view>
  <navigationview></navigationview>
  <router-view></router-view>
  <footer-view></footer-view>
</template>

<script>
import Navigationview from './components/Navigation.vue';
import HeaderView from './components/Header.vue';
import FooterView from './components/Footer.vue';

export default {
  name: 'App',
  components: {
   Navigationview,
   HeaderView,
   FooterView
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  background-color: #FEF7DC;
}
#app {
  width: 50%;
  margin: 0 auto;
  background-color: #fff;
}
a {
  color: #000;
  text-decoration:  none;
}
li{
  list-style: none;
}
</style>