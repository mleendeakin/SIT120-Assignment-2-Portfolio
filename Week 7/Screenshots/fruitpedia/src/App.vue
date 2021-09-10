<template>
  <Navbar />
    
    <div v-if="showSearchBar">
      <SearchBar>
        <template v-slot:heading><h1 class="body-heading" @click="toggleSearchbar">{{entryHeading}}</h1></template>
         
      </SearchBar>
    </div>

    <Form></Form>
    
  <!-- <Home :fruitPanelInSeason="fruitPanelInSeason" :fruitPanelOutOfSeason="fruitPanelOutOfSeason" :fruitPanelSeason="fruitPanelSeason" v-on:buttonClicked="showSearchBar = false"/> -->
  <Footer />
</template>

<script>
//Importing all components to be compatible with app.vue
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import SearchBar from "./components/SearchBar.vue";
import Form from "./components/Form.vue"

export default {
  name: "App",
  components: {Home, Navbar, Footer, SearchBar, Form},
  data() {
    return {
      entryHeading: "Click a fruit to begin! - Or search for a fruit!",
      fruitPanelInSeason: "In Season Price ",
      fruitPanelOutOfSeason: "Out of Season Price",
      fruitPanelSeason: "Season",
      showSearchBar: true,

    }
  },
  methods: {
    toggleSearchbar() {
      this.showSearchBar = !this.showSearchBar
      console.log(this.showSearchBar)
    }
  }
};
</script>




<style>

/* Global Styles that apply to App.vue */
#app {
  font-family: "Salsa", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Salsa&display=swap");

body {
  margin: 0;
  font-family: "Salsa", sans-serif;
  text-align: center;
  background-color: #385f32;
}

img {
  max-width: auto;
  height: auto;
}

.container {
  display: contents;
  height: 100%;
}

.content-container {
  display: inline-flex;
}

.body-heading {
  color: white;
}

/* Media queries to make the page responsive */

@media (max-width: 700px) {
  .body-heading {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .body-heading {
    font-size: 15px;
  }
}

@media (max-width: 1300px) {
  .content-container {
    display: inline;
  }
}


</style>
