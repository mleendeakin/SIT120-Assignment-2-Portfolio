<template>
    <div class="nav-container">
    <nav class="navbar">
      <li class="title"><a href="index.html">FruitPedia </a></li>
      <li><a href="">Seasons</a></li>
      <li><a href="">Recipes</a></li>
      <li><a href="">About</a></li>
    </nav>
  </div>
</template>

<style>
    /* Nav Bar */
.navbar {
  width: 100%;
  background-color: #7aac5b;
  text-align: left;
}

.nav-container {
  width: 100%;
}

.title {
  font-size: 2em;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  /* margin: 1em; */
}

nav a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  color: white;
  padding: 0.5em;
}

nav a:hover,
nav a:focus {
  color: #ddd;
}

@media (max-width: 700px) {
  nav a {
    font-size: 0.8em;
  }
}

@media (max-width: 400px) {
  .title {
    font-size: 1.5em;
  }
  nav a {
    font-size: 0.7em;
  }
}
</style>