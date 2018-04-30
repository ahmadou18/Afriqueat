<template>
  <section class="home">
    <section class="home-container">
        <picture class="home-img animated fadeInLeft">
        <img src="../assets/tarte-tomate.jpg" alt="">
      </picture>
      <div class="home-txt">
        <img class="logo-with-text" src="../assets/AfriquEat.png" alt="logo afriqueat coloré">

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium aut debitis deserunt dolore dolorem,
          doloremque explicabo fuga in iure laborum necessitatibus,
          neque pariatur quidem quisquam sed unde vel veritatis vitae!</p>

        <router-link to="/Products">Découvrir</router-link>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'HOME'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .home {
    width: 100%;
    height: 100%;
  }

  .home-container {
    width: 100%;
    height: 100vh;
    display: flex;
  }

  .home-img {
    width: 50%;
    height: 100vh;
    overflow: hidden;
  }

  .home-img img {
    object-fit: cover;
    width: 60vw;
    height: 100%;
    transform: translateX(-29%) skewX(-12deg);
    display: block;
  }

  .home-txt {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100vh;
    font-size: 15px;
  }

  .logo-with-text {
    width: 250px;
    height: auto;
    margin-bottom: 15px;
  }

  .home-txt p {
    font-size: 15px;
    text-align:center;
  }

  .home-txt a {
    height: 30px;
    width: 100px;
    border: 1px solid;
    transform: skewX(-12deg);
    color: black;
    text-align: center;
    line-height: 30px;
    transition: all 0.3s ease-in-out;
  }

  .home-txt a:after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    background-color: black;
    z-index: -1;
  }

  .home-txt a:hover {
    color: white;
  }

  .home-txt a:hover:after {
    width: 100%;
  }

  /*MEDIA*/

  @media screen and (max-width: 960px) {
    .home-container {
      flex-direction: column;
    }

    .home-img {
      width: 100%;
      height: 50vh;
    }

    .home-img img {
      width: 100vw;
      height: 50vh;
      transform: skewX(0);

    }

    .home-txt {
      width: 100%;
      height: 50vh;
    }
  }
</style>
