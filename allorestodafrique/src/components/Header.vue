<template>
  <nav class="navbar animated fadeIn">
    <ul class="menu">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/Products">Boutique</router-link></li>
    </ul>
    <router-link to="/"><img id="img-logo" src="../assets/AEatnoir.png" alt="logo barre de navigation"></router-link>
    <ul class="log-reg" v-if="state.isConnected">
      <li><router-link to="/login">Deconnexion</router-link></li>
    </ul>
    <ul class="log-reg" v-else>
      <li><router-link to="/register">Inscription</router-link></li>
      <li><router-link to="/login">Connexion</router-link></li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios'
import Store from '../store'

export default {
  name: 'navbar',

  data() {
    return {
      user: null,
      errors: [],
      state: Store.state
    }
  },

  methods: {
    connected() {
      console.log('Store:', Store)

      return Store
    }
  },

  mounted() {
    console.log('Header', Store)
  },
  created() {
    axios
      .get(`http://localhost:8888/usercurrent`, { credentials: true })
      .then(response => {
        // JSON responses are automatically parsed.
        if (response.data.error) throw response.data.error
        this.user = response.data
        this.state.isConnected = !!this.user
        console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
#img-logo {
  width: 115px;
  height: 35px;
  margin-top: 6px;
}

.navbar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  z-index: 2;
  background-color: white;
  top: 0;
  left: 0;
}
.menu {
  width: 40%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menu li a {
  color: black;
}

.menu li {
  padding: 15px 20px 15px 20px;
  position: relative;
  overflow: hidden;
}

.menu li:first-child:after {
  content: '';
  position: absolute;
  width: 0;
  height: 10%;
  top: 50%;
  left: 0;
  transition: all 0.3s ease;
  background-color: rgb(255, 201, 82);
  z-index: -1;
}

.menu li:first-child:hover:after {
  width: 100%;
}

.menu li:nth-child(2):after {
  content: '';
  position: absolute;
  width: 0;
  height: 10%;
  top: 50%;
  left: 0;
  transition: all 0.3s ease;
  background-color: rgb(255, 171, 74);
  z-index: -1;
}

.menu li:nth-child(2):hover:after {
  width: 100%;
}

.menu li a {
  transition: all 0.3s ease;
  outline: none;
}

.menu li:hover a {
  color: black;
  outline: none;
}
/*login and register*/

.log-reg {
  width: 40%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.log-reg li {
  padding: 15px 20px 15px 20px;
  position: relative;
  overflow: hidden;
}

.log-reg li:first-child:after {
  content: '';
  position: absolute;
  width: 0;
  height: 10%;
  top: 50%;
  left: 0;
  transition: all 0.6s ease;
  background-color: rgb(255, 116, 115);
  z-index: -1;
}

.log-reg li:nth-child(2):after {
  content: '';
  position: absolute;
  width: 0;
  height: 10%;
  top: 50%;
  left: 0;
  transition: all 0.3s ease;
  background-color: rgb(165, 210, 150);
  z-index: -1;
}

.log-reg li:nth-child(2):hover:after {
  width: 100%;
}

.log-reg li:first-child:hover:after {
  width: 100%;
}

.log-reg li a {
  color: black;
  outline: none;
}

/* end login and register*/
</style>
