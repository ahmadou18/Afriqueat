<template>
  <div id="app">
    <Header/>
    <transition  :duration="{ enter: 0, leave: 700 }" 
    mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  data() {
    return {
      leave: false
    }
  },
  components: {
    Header: Header
  }
}
</script>

<style>
#app {
  position: relative;
  overflow-x: hidden;
}
</style>
