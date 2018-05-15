<template>
  <section class="register">

    <picture class="register-img animated fadeInLeft">
      <img src="../assets/brochettes.jpg" alt="Image Page Inscription">
    </picture>
    <div class="form-container">
      <img class="logo-with-text" src="../assets/AfriquEat.png" alt="logo afriqueat coloré">
    <p>{{Response}}</p>
      <section class="formulaire">

        <div class="name">
          <label for="name">Nom</label>
          <input v-model="users.lastname" type="text" name="name" id="name">
        </div>

        <div class="prenom">
          <label for="prenom">Prénom</label>
          <input v-model="users.firstname" type="text" name="prenom" id="prenom">
        </div>

        <div class="email">
          <label  for="email">E-mail</label>
          <input v-model="users.email" type="email" name="email" id="email">
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
import axios from 'axios'

export default {
  name: 'register',
  data () {
    return {
      users: { lastname: '', firstname: '', email: '', password: '' },
      Response: ''
    }
  },

  methods: {
    register () {
      const newUsers = {
        lastname: this.users.lastname,
        firstname: this.users.firstname,
        email: this.users.email,
        password: this.users.password
      }
      axios.post('http://localhost:8888/register', newUsers)
        .then((res) => {
          console.log('un utilisateur a été ajouté')
          if (res.status === 200) {
            this.Response = 'Votre compte a bien été créée, veuillez vous connecter'
          }
        })
        .catch((error) => {
          // return response.status(403).json({ error: "L'utisateur n'a pas pu être crée" });
          /* eslint-disable no-console */
          console.log('Problème de creation utilisateur', error)
          /* eslint-disable no-console */
          if (error.status !== 200) {
            this.Response = 'une erreur a été commise'
          }
        })
    }
  }
}
</script>

<style scoped>

  .register {
    width: 100%;
    height: 100%;
    display: flex;
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

  .name label, .prenom label, .email label, .password label, .confirm-password label {
    margin-bottom: 0;
    font-size: 14px;
  }

  .name input, .prenom input, .email input, .password input, .confirm-password input {
    width: 300px;
    height: 30px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid;
    margin-bottom: 20px;
  }

  .name, .prenom, .email, .password, .confirm-password {
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

  .register-submit:hover::after {
    width: 100%;
  }

  /*MEDIA*/

  @media screen and (max-width: 960px) {
    .register {
      flex-direction: column;
    }

  }
</style>
