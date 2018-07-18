<template>
  <section id="dashboardAdd">
    <div class="food-form-container">
    <p>{{Response}}</p>
        <img class="return"  @click="close" src="../assets/left-arrow.png" alt="fleche retour">
        <div class="foodname">
          <label for="name">Nom du plat</label>
          <input v-model.trim="food.foodName" type="text" name="name" id="name" required>
        </div>

        <div class="desc">
          <label for="desc">Description</label>
          <textarea v-model.trim="food.foodDescription" name="desc" id="desc" cols="30" rows="10" required></textarea>        
        </div>

        <div class="price">
          <label for="price">Prix</label>
          <input v-model.trim="food.foodPrice" type="text" name="price" id="price" required>
        </div>

        <div class="foodImage">
          <label for="foodImage">Image</label>
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        </div>

        <button type="submit" value="Envoyer" class="food-submit" @click="addFood()"><span>Envoyer</span></button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DashboardAdd',
  data() {
    return {
      food: { foodName: '', foodDescription: '', foodPrice: '', foodImage: '' },
      Response: '',
      file: ''
    }
  },

  methods: {
    close: function() {
      this.$router.push('/' + 'Dashboard')
    },

    addFood() {
      const formData = new FormData()

      formData.append('file', this.file)

      axios
        .post('http://localhost:8888/plats/image', formData)
        .then(file => {
          console.log(file)
          this.food.foodImage = file.data.success
          console.log('foodImage========', this.food.foodImage)
        })
        .then(() => {
          const newFood = {
            foodName: this.food.foodName,
            foodDescription: this.food.foodDescription,
            foodPrice: this.food.foodPrice,
            foodImage: this.food.foodImage
          }
          console.log('newfood====', newFood)

          axios.post('http://localhost:8888/plats', newFood)
          console
            .log('newFood', newFood)

            .then(res => {
              console.log('un plat a été ajouté')
              if (res.status === 200) {
                this.Response = 'Un plat a bien été ajouté '
              }
            })
            .catch(error => {
              // return response.status(403).json({ error: "L'utisateur n'a pas pu être crée" });
              /* eslint-disable no-console */
              console.log(
                'Un problème est survenu lors de la création du plat',
                error
              )
              /* eslint-disable no-console */
              if (error.status !== 200) {
                this.Response = 'une erreur a été commise'
              }
            })
        })
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    }
  }
}
</script>

<style scoped>
#dashboardAdd {
  padding-top: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.food-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 17px -1px rgba(0, 0, 0, 0.63);
  width: 80%;
  height: 90%;
}

.food-form-container div {
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.food-form-container div input {
  border-radius: 0px;
  border: 1px solid;
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 15px;
}

.food-form-container div textarea {
  border: 1px solid;
  width: 100%;
  padding-left: 15px;
}

.return {
  position: absolute;
  top: 15%;
  left: 11%;
}

.food-submit {
  position: relative;
  width: 30%;
  height: 40px;
  border: 2px solid;
  background-color: transparent;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
}

.food-submit:after {
  content: '';
  position: absolute;
  transform: translateX(-100%);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s ease 0.1s;
  background-color: black;
  color: white;
  line-height: 35px;
}

.food-submit:before {
  content: 'Envoyer';
  position: absolute;
  transform: translateY(100%);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s ease 0.1s;
  color: white;
  line-height: 35px;
  z-index: 5;
}

.food-submit:hover::before {
  transform: translateY(0);
}

.food-submit:hover:after {
  transform: translateX(0);
}

.food-submit span {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  pointer-events: none;
  height: 100%;
}

.food-submit:hover span {
  transform: translateY(-100%);
}
</style>