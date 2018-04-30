<template>
  <section>
    <h1>{{msg7}}</h1>
  </section>
</template>

<script>
import Header from './Header'
export default {
  name: 'cart',
  data () {
    return {
      msg7: 'CART'
    }
  },
  components: {
    'Header': Header
  }
}
</script>

<style scoped>

</style>
