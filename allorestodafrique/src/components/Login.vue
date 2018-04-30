<template>
  <section class="login">

    <picture class="login-img animated fadeInLeft">
      <img src="../assets/paella.jpg" alt="Image Page Connexion">
    </picture>
    <div class="login-container animated fadeIn">

      <img class="logo-with-text" src="../assets/AfriquEat.png" alt="logo afriqueat coloré">

      <form action="" class="login-form">
      <div class="email">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email">
      </div>

      <div class="password">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password">
      </div>
      <button type="submit" class="login-submit"> Se Connecter</button>
    </form>
    </div>password
  </section>
</template>

<script>
import Header from './Header'

export default {
  name: 'login',
  data () {
    return {
      msg5: 'LOGIN'
    }
  },
  components: {
    'Header': Header
  }
}
</script>

<style scoped>

.login {
  width: 100%;
  height: 100%;
}

.login-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;

}

.login-container form div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.login  {
  width: 100%;
  height: 100%;
  display: flex;
}

.logo-with-text {
  width: 250px;
  height: auto;
  margin-bottom: 50px;
}

.login-img {
  width: 50%;
  height: 100vh;
  overflow: hidden;
}

.login-img img {
  object-fit: cover;
  object-position: 80px;
  width: 60vw;
  height: 100%;
  transform: translateX(-29%) skewX(-12deg);
  display: block;
}
.email #email, .password #password {
  width: 300px;
  height: 30px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 10px;
}
.email {
  align-items: flex-start;
}

.email label, .password label {
    margin-bottom: 20px;
    font-size: 14px;
  }

.login-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

  .login-submit {
    cursor: pointer;
    width: 200px;
    margin: 20px auto 0 auto;
    font-weight: bold;
    background-color: transparent;
    border: none;
    position: relative;
  }

  .login-submit::after {
    content: "";
    position: absolute;
    width: 0;
    height: 5px;
    top: 45%;
    left: 0;
    transition: all 0.3s ease;
    background-color: rgb(165, 210, 150);
    z-index: -1;
  }

  .login-submit:hover::after {
    width: 100%;
  }

/*MEDIA*/

@media screen and (max-width: 960px) {
  .login {
    flex-direction: column;
  }

  .login-img {
    width: 100%;
    height: 50vh;
  }

  .login-img img {
    width: 100vw;
    height: 50vh;
    transform: skewX(0);

  }

}
</style>
