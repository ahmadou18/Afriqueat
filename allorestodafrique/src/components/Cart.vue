<template>
  <section id="cart">
    <div class="cart-item">
      <img src="" alt=""> <div></div>
    </div>
    <button type="submit" class="dishes-submit"><span>COMMANDER</span></button>
  </section>
</template>

<script>
import Header from './Header'
export default {
  name: 'cart',
  data() {
    return {
      msg7: 'CART'
    }
  },
  components: {
    Header: Header
  }
}
</script>

<style scoped>
#cart {
  width: 100%;
  height: 100%;
  padding-top: 50px;
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
