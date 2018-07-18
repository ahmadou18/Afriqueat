<template>
  <section id="dashboard">
    <router-link tag="button" to="/Dashboard/Add">+ Ajouter un plat</router-link>
<ul v-if="food && food.length">
    <li v-for="plat of food" :key="plat.foodId">
      <p>Nom: <strong>{{plat.foodName}}</strong></p>
      <p>Description: {{plat.foodDescription}}</p>
      <p>Prix: {{plat.foodPrice}}€</p>
    </li>
  </ul>  
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  data() {
    return {
      food: []
    }
  },
  created() {
    axios
      .get(`http://localhost:8888/plats`)
      .then(response => {
        // JSON responses are automatically parsed.
        if (response.data.error) throw response.data.error
        this.food = response.data.success
      })
      .catch(e => {
        this.errors.push(e)
      })
      .then(res => console.log(this.food))
  }
}
</script>

<style scoped>
#dashboard {
  width: 100%;
  height: 100%;
  padding-top: 50px;
}

#dashboard ul {
  list-style: none;
  width: 50%;
}
#dashboard ul li {
  display: flex;
  justify-content: space-around;
}
</style>
