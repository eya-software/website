<template>
  <div id="app" :class="{mobile: $store.state.mobile}">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}

h1 {
  text-transform: uppercase;
}

a:link, a:visited, a:active {
  color: #162229;
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #999;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #777; 
}

.buttons {
  display: flex;
  flex-direction: row;
}

.buttons a {
  display: block;
  background: white;
  color: #2980b9;
  font-weight: bold;
  border-radius: 5px;
  font-size: 16px;
  width: 120px;
  padding: 10px;
  margin-right: 10px;
  text-align: center;
}

.section {
  width: 100vw;
  padding: 50px;
  padding-top: 40px;
}

.mobile .section {
  padding: 20px;
}

.section h1, .section h2 {
  margin: 0;
}

.section h1 {
  font-size: 64px;
}

.mobile .section h1 {
  font-size: 48px;
}

.section h2 {
  font-size: 36px;
  background: linear-gradient(45deg, #2980b9, #2c3e50);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section .buttons {
  margin-top: 20px;
}

.section .buttons a {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 200px;
}

.section.grey {
  background: #eee;
}

.initiative {
  position: absolute;
  margin-top: 80px;
  align-items: center;
  vertical-align: middle;
  width: 100vw;
  display: flex;
  flex-direction: column;
  line-height: 200%;
}

.initiative h1 {
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
