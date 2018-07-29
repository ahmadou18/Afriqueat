<template>
<section id="product-details">
    <section class="details-container">
        <picture class="details-img " ref="blockLeft">
        <img :src=" 'http://localhost:8888/' + food.foodImage"> alt="">
      </picture>
      <div class="details-txt" ref="blockRight">
        <h1 class="foodTitle">{{food.foodName}}</h1>
        <p class="descrtiption">{{food.foodDescription}}</p>
        <p class="price">Prix: {{food.foodPrice}}€</p>
        <button @click="addToCart(food.foodId)" to="/Cart" class="go-to-cart" tag="button"> <span>Ajouter au panier</span> </button>
      </div>
    </section>
  </section>
</template>

<script>
import anime from 'animejs'
import axios from 'axios'

export default {
  name: 'ProductsDetails',
  props: ['id'],
  data() {
    return {
      food: {}
    }
  },
  methods: {
    animationLeft: function() {
      anime({
        targets: this.$refs.blockLeft,
        translateX: {
          value: ['-100%', 0],
          duration: 800,
          easing: [0.645, 0.045, 0.355, 1]
        }
        // opacity: {
        //   value: [0, 1],
        //   duration: 800,
        //   delay: 100,
        //   easing: "linear"
        // }
      })
    },
    animationRight: function() {
      anime({
        targets: this.$refs.blockRight,
        translateX: {
          value: ['100%', 0],
          duration: 800,
          easing: [0.645, 0.045, 0.355, 1]
        }
        // opacity: {
        //   value: [0, 1],
        //   duration: 800,
        //   delay: 100,
        //   easing: "linear"
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

  created() {
    console.log(this.id)
    axios
      .get(`http://localhost:8888/plats/${this.id}`, { credentials: true })

      .then(response => {
        // JSON responses are automatically parsed.
        this.food = response.data.success
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  mounted() {
    this.animationLeft()
    this.animationRight()
  },
  beforeDestroy() {
    anime({
      targets: this.$refs.blockLeft,
      translateX: {
        value: [0, '-100%'],
        duration: 800,
        delay: function(el, i) {
          return i * 100
        },
        easing: [0.645, 0.045, 0.355, 1]
      }
      // opacity: {
      //   value: [1, 0],
      //   duration: 500,
      //   delay: 100,
      //   easing: "linear"
      // }
    }),
      anime({
        targets: this.$refs.blockRight,
        translateX: {
          value: [0, '100%'],
          duration: 800,
          delay: function(el, i) {
            return i * 100
          },
          easing: [0.645, 0.045, 0.355, 1]
        }
        // opacity: {
        //   value: [1, 0],
        //   duration: 500,
        //   delay: 100,
        //   easing: "linear"
        // }
      })
    console.log(this.$refs.blockRight)
    console.log(this.$refs.blockLeft)
  }
}
</script>

<style scoped>
#product-details {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.details-container {
  width: 100%;
  height: 100vh;
  display: flex;
}

.details-img {
  width: 50%;
  height: 100vh;
  overflow: hidden;
}

.details-img img {
  object-fit: cover;
  width: 60vw;
  height: 100%;
  transform: translateX(-29%) skewX(-12deg);
  display: block;
}

.details-txt {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100vh;
  font-size: 15px;
}

.details-txt p {
  width: 70%;
  margin: 10px 0 40px 0;
  text-align: justify;
}

.price {
  text-align: right !important;
}

.go-to-cart {
  position: relative;
  width: 60%;
  height: 40px;
  background-color: transparent;
  border: 2px solid;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
}

.go-to-cart:after {
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

.go-to-cart:before {
  content: url('../assets/shopping-cart-white.png') 'Ajouter au panier';
  object-position: left;
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

.go-to-cart:hover::before {
  transform: translateY(0);
}

.go-to-cart:hover:after {
  transform: translateX(0);
}

.go-to-cart span {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  pointer-events: none;
}

.go-to-cart:hover span {
  transform: translateY(-100%);
}
</style>
