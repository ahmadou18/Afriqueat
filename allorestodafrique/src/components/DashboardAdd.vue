<template>
<section id="dashboardAdd">
    <div class="food-form-container">
    <p>{{Response}}</p>

        <div class="foodname">
          <label for="name">Nom du plat</label>
          <input v-model="food.foodName" type="text" name="name" id="name">
        </div>

        <div class="desc">
          <label for="desc">Description</label>
          <textarea v-model="food.foodDescription" name="desc" id="desc" cols="30" rows="10"></textarea>        </div>

        <div class="price">
          <label  for="price">Prix</label>
          <input v-model="food.foodPrice" type="text" name="price" id="price">
        </div>

        <div class="foodImage">
          <label  for="foodImage">Image</label>
          <input v-model="food.foodImage" type="text" name="foodImage" id="image">
        </div>

        <input type="submit" value="Envoyer" class="food-submit" @click="addFood()">
    </div>
  </section>
  </template>

<script>
import axios from 'axios'

export default {
  name: 'DashboardAdd',
  data () {
    return {
      food: { foodName: '', foodDescription: '', foodPrice: '', foodImage:'' },
      Response: ''
    }
  },

  methods: {
    addFood () {
      const newFood = {
        foodName: this.food.foodName,
        foodDescription: this.food.foodDescription,
        foodPrice: this.food.foodPrice,
        foodImage: this.food.foodImage
      }
      axios.post('http://localhost:8888/plats', newFood)
        .then((res) => {
          console.log('un plat a été ajouté')
          if (res.status === 200) {
            this.Response = 'Un plat a bien été ajouté '
          }
        })
        .catch((error) => {
          // return response.status(403).json({ error: "L'utisateur n'a pas pu être crée" });
          /* eslint-disable no-console */
          console.log('Un problème est survenu lors de la création du plat', error)
          /* eslint-disable no-console */
          if (error.status !== 200) {
            this.Response = 'une erreur a été commise'
          }
        })
    }
  }
}
</script>

<style scoped>
#dashboardAdd {
  padding-top: 50px;
}
</style>