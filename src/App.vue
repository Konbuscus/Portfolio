<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
        <p>Axel Masson</p>
         <!--img src="./assets/logo.png" width="112" height="28">-->
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
          <router-link to="/projects" class="navbar-item">
            Projects
          </router-link>
          <router-link to="/education" class="navbar-item">
            Education
          </router-link>
          <router-link to="/experiences" class="navbar-item">
            Work experiences
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Built by Axel Masson with Vue.js and 	&#10084; .
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  import ps from "./services/ProjectsService";
  export default {
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
    created: function(){
      ps.wakeUpHeroku();
    }
  };
</script>

<style type="text/css">
  #app {
    min-height: 100vh;
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: 168px; /* height of your footer */
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .hero{
    background-image: url('../public/images/banner.jpg');
    width: 100%;
    position: relative; /* If you want text inside of it */
  }
</style>

<style lang="sass">
  @import "~bulma/bulma.sass"
</style>