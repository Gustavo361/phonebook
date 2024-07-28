<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: grid;
  place-items: center;
  background-color: #141c2f;
  height: 100vh;
  width: 100vw;
}

body>* {
  margin: 0 auto;
  max-width: 600px;
  width: 95%;
  color: white;
}

@media (max-width: 600px) {
  body>* {
    padding: 0 2.5%;
  }
}

#app {
  font-family: Rubik, sans-serif;
}

main {
  display: flex;
  margin-top: 3%;
  margin-bottom: 3%
}

nav a {
  font-weight: 700;
  color: white
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}

form {
  display: flex;
  flex-direction: column;
  background-color: #171723;
  padding: 1.5% 2%;
  border-radius: 12px
}

form div {}

form>* {
  display: block;
}

form input {
  background-color: transparent;
  border: 1px solid #42B983;
  width: 100%;
  border-radius: 12px;
  color: white;
  line-height: 2;
  font-size: 16px;
  padding-left: 2%;
  width: 100%
}

form input[type=file] {
  border: none;
}

button {
  background-color: transparent;
  line-height: 2;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  padding-left: 2%;
  padding-right: 2%;
  display: grid;
  place-items: center;
}

button:hover {
  cursor: pointer;
  color: #42B983;
  text-decoration: underline
}
</style>
