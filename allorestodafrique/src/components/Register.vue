<template>
  <section class="register">

    <picture class="register-img" ref="blockLeft">
      <img src="../assets/brochettes.jpg" alt="Image Page Inscription">
    </picture>
    <div class="form-container" ref="blockRight">
      <img class="logo-with-text" src="../assets/AfriquEat.png" alt="logo afriqueat coloré">
    <p>{{Response}}</p>
      <section class="formulaire" >

        <div class="name">
          <label for="name">Nom</label>
          <input v-model.trim.="users.lastname" type="text" name="name" id="name">
        </div>

        <div class="prenom">
          <label for="prenom">Prénom</label>
          <input v-model.trim="users.firstname" type="text" name="prenom" id="prenom">
        </div>

        <div class="email">
          <label  for="email">E-mail</label>
          <input v-model.trim="users.email" type="email" name="email" id="email">
        </div>

       <div class="password">
         <label for="password">Mot de passe</label>
         <input v-model="users.password" type="password" name="password" id="password">
       </div>

       <!-- <div class="confirm-password">
          <label for="confirmPassword">Confirmez votre mot de passe</label>
          <input type="password" name="confirmPassword" id="confirmPassword">
        </div> -->
        <input type="submit" value="Envoyer" class="register-submit" @click="register()">
      </section>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'
import axios from 'axios'

export default {
  name: 'register',
  data() {
    return {
      users: { lastname: '', firstname: '', email: '', password: '' },
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
    register() {
      const newUsers = {
        lastname: this.users.lastname,
        firstname: this.users.firstname,
        email: this.users.email,
        password: this.users.password
      }
      axios
        .post('http://localhost:8888/register', newUsers)
        .then(res => {
          console.log('un utilisateur a été ajouté')
          if (res.status === 200) {
            this.Response =
              'Votre compte a bien été créée, veuillez vous connecter'
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
    console.log(this.$refs.blockRight)
    console.log(this.$refs.blockLeft)
  }
}
</script>

<style scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.form-container section div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
}

.form-container {
  margin: auto;
  text-align: justify;
}

.logo-with-text {
  width: 250px;
  height: auto;
  margin-bottom: 50px;
}

.register-img {
  width: 50%;
  height: 100vh;
  overflow: hidden;
}

.register-img img {
  object-fit: cover;
  width: 60vw;
  height: 100%;
  transform: translateX(-29%) skewX(-12deg);
  display: block;
}

.name label,
.prenom label,
.email label,
.password label,
.confirm-password label {
  margin-bottom: 0;
  font-size: 14px;
}

.name input,
.prenom input,
.email input,
.password input,
.confirm-password input {
  width: 300px;
  height: 30px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 20px;
}

.name,
.prenom,
.email,
.password,
.confirm-password {
  margin-bottom: 5px;
}

.register-submit {
  cursor: pointer;
  width: 200px;
  margin-left: 40px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  position: relative;
}

.register-submit::after {
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

.register-submit:hover::after {
  width: 100%;
}

/*MEDIA*/

@media screen and (max-width: 960px) {
  .register {
    flex-direction: column;
  }

  .register-img {
    width: 100%;
    height: 50vh;
  }

  .register-img img {
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
