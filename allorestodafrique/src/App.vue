<template>
  <div id="app">
    <Header/>
    <transition class="router-anim" 
    enter-active-class="animated fadeIn" 
    leave-active-class="animated fadeOut" 
    mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header: Header
  }
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2";
.animated {
  -webkit-animation-duration: 0.7s;
  animation-duration: 0.7s;
}
#app {
  position: relative;
}
</style>
