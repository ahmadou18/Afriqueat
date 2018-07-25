<template>
  <section class="login">

    <picture class="login-img" ref="blockLeft">
      <img src="../assets/paella.jpg" alt="Image Page Connexion">
    </picture>
    <div class="login-container" ref="blockRight">
      <img class="logo-with-text" src="../assets/AfriquEat.png" alt="logo afriqueat coloré">
        {{ Response}}
          <div class="login-form">
          <div class="email">
            <label for="email">E-mail</label>
            <input  v-model.trim="users.email" type="email" name="email" id="email">
          </div>

          <div class="password">
            <label for="password">Mot de passe</label>
            <input v-model.trim="users.password" type="password" name="password" id="password">
          </div>
          <button type="submit" class="login-submit" @click="connexion()"> Se Connecter</button>
        </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'
import axios from 'axios'
import Store from '../store'

export default {
  name: 'login',
  data() {
    return {
      users: { firstname: '', email: '', password: '' },
      Response: ''
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
          value: ['200%', 0],
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

    connexion() {
      const connect = {
        email: this.users.email,
        password: this.users.password
      }
      axios
        .post('http://localhost:8888/login', connect, { credentials: true })

        .then(res => {
          if (res.status === 200) {
            this.Response = 'Bienvenue'
            Store.state.isConnected = true
          }
        })
        .catch(error => {
          // return response.status(403).json({ error: "L'utisateur n'a pas pu être crée" });
          /* eslint-disable no-console */
          console.log('Problème de creation utilisateur', error)
          /* eslint-disable no-console */
          if (error.status !== 200) {
            this.Response = 'une erreur a été commise'
          }
        })
    }
  },

  mounted() {
    this.animationLeft()
    this.animationRight()
    console.log('connected:', Store.isConnected)
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
          value: [0, '200%'],
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
    // console.log(this.$refs.blockRight)
    // console.log(this.$refs.blockLeft)
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
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

.login {
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
.email #email,
.password #password {
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

.email label,
.password label {
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
  content: '';
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
    transform: skewX(0) translate(-27%);
    width: 137vw;
  }

  .logo-with-text {
    display: none;
  }
}
</style>
