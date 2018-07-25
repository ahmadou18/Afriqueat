<template>
    <section class="products-container" ref="container">

      <router-link v-for="plat of food" :key="plat.foodId" class="link-to" :to="{ name: 'ProductsDetails', params: { id: plat.foodId }}" >
        <div :style="{ 'background-image': 'url(http://localhost:8888/' + plat.foodImage + ')' }" class="food-box">
         <button @click="addToCart(plat.foodId)" ><img class="cart" src="../assets/shopping-cart.png" alt="Shopping-cart"></button>
          <div class="dishes-name-price"><span>{{plat.foodName}}</span><span>{{plat.foodPrice}}€</span></div>
        </div>
      </router-link>
    </section>
</template>

<script>
import anime from 'animejs'
import axios from 'axios'
import Store from '../store'

export default {
  name: 'products',
  data() {
    return {
      food: [],
      errors: [],
      cart: {}
    }
  },

  methods: {
    fade: function() {
      anime({
        targets: this.$refs.container,
        translateY: {
          value: ['-100%', 0],
          duration: 800,
          easing: [0.645, 0.045, 0.355, 1]
        }
        // opacity: {
        //   value: [0, 1],
        //   duration: 800,
        //   delay: 100,
        //   easing: 'linear'
        // }
      })
    },

    addToCart(foodId) {
      axios
        .post(`http://localhost:8888/command/${foodId}`, {
          credentials: true
        })

        .then(response => {
          // JSON responses are automatically parsed.
          this.cart = response.data.success
          console.log('addToCart:', response)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  mounted() {
    this.fade()
    console.log('connected:', Store.isConnected)
  },

  created() {
    axios
      .get(`http://localhost:8888/plats`, { credentials: true })
      .then(response => {
        // JSON responses are automatically parsed.
        if (response.data.error) throw response.data.error
        this.food = response.data.success
      })
      .catch(e => {
        this.errors.push(e)
      })
    // .then(res => console.log(this.food))
  },
  beforeDestroy() {
    anime({
      targets: this.$refs.container,
      translateY: {
        value: [0, '-100%'],
        duration: 800,
        easing: [0.645, 0.045, 0.355, 1]
      }
      // opacity: {
      //   value: [1, 0],
      //   duration: 800,
      //   delay: 100,
      //   easing: "linear"
      // }
    })
  }
}
</script>

<style scoped>
.products-container {
  width: 100%;
  box-sizing: border-box;
  margin-top: 0;
  padding: 80px 10px 0 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(255, 171, 74);
}

.food-box {
  position: relative;
  height: 330px;
  background-image: url('https://dummyimage.com/200x200/edbe68');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.food-box:hover {
  -webkit-box-shadow: 5px 5px 13px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 13px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 13px -7px rgba(0, 0, 0, 0.75);
  filter: blur(0.1px);
}

.food-box span {
  text-align: center;
  color: white;
  font-weight: bold;
  margin: 0;
}

.food-box span:after {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  background-color: black;
}

.link-to {
  width: 25%;
  height: 350px;
  margin-right: 2%;
  outline: none;
  margin-bottom: 1px;
}

.cart {
  z-index: 9999;
}

.dishes-name-price {
  background-color: white;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 235px;
}

.dishes-name-price span {
  color: black;
  height: 20%;
  font-weight: 300;
  font-size: 13px;
}

@media screen and (max-width: 1400px) {
  .link-to {
    width: 25%;
  }
}

@media screen and (max-width: 1100px) {
  .link-to {
    width: 22%;
  }
}

@media screen and (max-width: 1024px) {
  .link-to {
    width: 25%;
  }
}

@media screen and (max-width: 980px) {
  .link-to {
    width: 33.33%;
  }
}

@media screen and (max-width: 780px) {
  .link-to {
    width: 40%;
  }
}

@media screen and (max-width: 600px) {
  .link-to {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .link-to {
    width: 60%;
  }
}

@media screen and (max-width: 400px) {
  .link-to {
    width: 70%;
  }
}

@media screen and (max-width: 360px) {
  .link-to {
    width: 100%;
  }
}

button {
  position: absolute;
  z-index: 2;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 10px;
  transform: translateX(-206%);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
}

.food-box:hover button {
  transform: translateX(0);
}
</style>
