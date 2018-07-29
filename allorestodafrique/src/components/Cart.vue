<template>
  <section id="cart">
    <div v-for="cartItem of food" :key="cartItem.foodId" class="cart-item">
      <img :src=" 'http://localhost:8888/' + cartItem.foodImage" alt="">
       <div class="cart-price"><p>Prix: {{cartItem.foodPrice}}€</p>  </div>
       <div class="cart-name"><p>Nom: {{cartItem.foodName}}</p>  </div>
    </div>
    <button type="submit" class="dishes-submit"><span>COMMANDER</span></button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cart',
  data() {
    return {
      cart: [],
      food: []
    }
  },
  created() {
    axios
      .get(`http://localhost:8888/command`, { credentials: true })
      .then(response => {
        // JSON responses are automatically parsed.
        if (response.data.error) throw response.data.error
        this.food = response.data.success

        console.log('cart:', response.data.success)
      })
      .catch(e => {
        this.errors.push(e)
      })
    // .then(res => console.log(this.food))
  }
}
</script>

<style scoped>
#cart {
  width: 100%;
  height: 100%;
  padding: 100px;
}

.cart-item {
  margin-bottom: 5px;
  border: 1px solid;
  display: flex;
}

.cart-price {
  border-right: 1px solid;
  padding-left: 5px;
  padding-right: 5px;
}

.cart-name {
  width: 80%;
  text-align: center;
}

.cart-item img {
  width: 100px;
  height: auto;
  border-right: 1px solid;
}

.dishes-submit {
  position: relative;
  width: 30%;
  height: 40px;
  border: 2px solid;
  background-color: transparent;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
}

.dishes-submit:after {
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

.dishes-submit:before {
  content: 'COMMANDER';
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

.dishes-submit:hover::before {
  transform: translateY(0);
}

.dishes-submit:hover:after {
  transform: translateX(0);
}

.dishes-submit span {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  pointer-events: none;
  height: 100%;
}

.dishes-submit:hover span {
  transform: translateY(-100%);
}
</style>
