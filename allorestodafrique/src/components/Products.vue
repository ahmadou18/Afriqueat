<template>
    <section class="products-container">

      <router-link v-for="plat of food" :key="plat.foodId" class="link-to" :to="{ name: 'ProductsDetails', params: { id: plat.foodId }}" >
        <div class="food-box">
         <router-link to="/Cart"><img class="cart" src="../assets/shopping-cart.png" alt="Shopping cart"></router-link>
          <span>{{plat.foodName}}</span>
        </div>
      </router-link>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'products',
  data () {
    return {
      food:[]
    }
  },
  created() {
     axios.get(`http://localhost:8888/plats`)
    .then(response => {
      // JSON responses are automatically parsed.
      if(response.data.error) throw response.data.error
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

  .products-container{
    width: 100%;
    box-sizing: border-box;
    margin-top: 0;
    padding: 80px 10px 0 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgb(255, 171, 74);
  ;
  }

  .food-box {
    height: 250px;
    background-image: url("https://dummyimage.com/200x200/edbe68");
    background-size: cover;
    overflow: hidden;
  }

  .food-box span {
    text-align: center;
    color: white;
    font-weight: bold;
    margin: 0;

  }

  .food-box span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    background-color: black;
  }

  .link-to {
    width: 15%;
    height: 300px;
    margin-right: 4px;
    outline: none;
    margin-bottom: 4px;
  }

  @media screen and (max-width: 1400px) {
    .link-to {
      width: 20%;
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
  .food-box img {
    position: relative;
    top: 10px;
    left: 10px;
    transform: translateX(-150%);
    transition: all 0.3s ease-in-out ;
  }

  .food-box:hover img {
    transform: translateX(0);
  }
</style>
