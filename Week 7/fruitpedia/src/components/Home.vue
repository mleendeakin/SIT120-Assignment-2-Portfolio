<template>
  <div class="container">
    <div class="content-container">
      <div class="fruit-grid">
        <div class="fruit-row">
          <div class="fruit-box-item" @click="handleFruit('apple'); $emit('buttonClicked')">
            <img
              class="fruit-grid-image"
              src="../assets/apple.png"
              alt="Apple box"
            />
            <div class="fruit-box-name">
              <h1>Apple</h1>
            </div>
          </div>

          <div class="fruit-box-item" @click="handleFruit('banana'); $emit('buttonClicked')">
            <img
              class="fruit-grid-image"
              src="../assets/banana.png"
              alt="Banana box"
            />
            <div class="fruit-box-name">
              <h1>Banana</h1>
            </div>
          </div>
          <div class="fruit-box-item" @click="handleFruit('grapes'); $emit('buttonClicked')">
            <img
              class="fruit-grid-image"
              src="../assets/grape.png"
              alt="Grape box"
            />
            <div class="fruit-box-name">
              <h1>Grapes</h1>
            </div>
          </div>
        </div>
        <div class="fruit-row">
          <div class="fruit-box-item" @click="handleFruit('orange'); $emit('buttonClicked')">
            <img
              class="fruit-grid-image"
              src="../assets/orange.png"
              alt="Orange box"
            />
            <div class="fruit-box-name">
              <h1>Orange</h1>
            </div>
          </div>

          <div class="fruit-box-item" @click="handleFruit('watermelon'); $emit('buttonClicked')">
            <img
              class="fruit-grid-image"
              src="../assets/watermelon.png"
              alt="watermelon box"
            />
            <div class="fruit-box-name">
              <h1>Watermelon</h1>
            </div>
          </div>

          <div class="fruit-box-item" @click="handleFruit('strawberry'); $emit('buttonClicked')">
            <img
              class="fruit-grid-image"
              src="../assets/strawberry.png"
              alt="Strawberry box"
            />
            <div class="fruit-box-name">
              <h1>Strawberry</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="fruit-panel">
        <h1 id="fruit-panel-name" >{{ name }}</h1>
        <div class="small-boxes">
          <div class="panel-left-box">
            <img class="panel-left-box-image" :src="seasonImage" alt="">          
          </div>
          <div class="panel-right-box">
            <img class="panel-right-box-image" :src="seasonImage2" alt="">
          </div>         
        </div>
        <div class="panel-content-box">
          <p id="panel-fact">{{fact}}</p>
          <p id="in-season">{{fruitPanelInSeason}} - {{priceInSeason}}</p>
          <p id="out-of-season">{{fruitPanelOutOfSeason}} - {{priceOutOfSeason}}</p>
          <p id="growth-season">{{fruitPanelSeason}} - {{season}}</p>
        </div>
      </div>
    </div> 
  </div>
</template>


<script>
export default {
  props: ['fruitPanelInSeason', 'fruitPanelOutOfSeason', 'fruitPanelSeason'],
    data () {
        return {
            // variables that are set to defaults on the page when you first open the site. They are changed once you click a fruit on the site.
            name: "Click a fruit to Begin!" ,
            priceInSeason: 0,
            priceOutOfSeason: 0,
            fact: "Fun fact about the fruit!",
            season: "Click a fruit to begin!",

            // Seasonal images that are present in this version, and they do need the require() to be rendered.
            seasonImage: require("../assets/apple.png"),
            seasonImage2: require("../assets/autumn.png"),

            // Fruits have now been created into objects for a more accesible way of calling fruits.
            // Each fruit has: a SeasonStartImage, SeasonEndImage, Season, a name, a price in season, a Price out of season and a fact about the fruit. 
            fruits: {
                banana: {
                    fruitname: "Banana",
                    priceInSeason: 6.1,
                    priceOutOfSeason: 7,
                    fact: "Bananas can float on water!",
                    season: "Novemer-March",
                    seasonImage: require("../assets/spring.png"),
                    seasonImage2: require("../assets/summer.png"),
                },

                apple: {
                    fruitname: "Apple",
                    priceInSeason:  4.7,
                    priceOutOfSeason: 6.2,
                    fact: "Apple Trees take 4-5 years to fruit",
                    season: "February-June",
                    seasonImage: require("../assets/autumn.png"),
                    seasonImage2: require("../assets/winter.png"),                 
                },

                orange: {
                    fruitname: "Orange",
                    priceInSeason:  9.5,
                    priceOutOfSeason: 11.9,
                    fact: "There are over 600 varieties of Orange",
                    season: "May-November",
                    seasonImage: require("../assets/autumn.png"),
                    seasonImage2: require("../assets/spring.png"),
                },
                
                grapes: {
                    fruitname: "Grapes",
                    priceInSeason:  10,
                    priceOutOfSeason: 16.4,
                    fact: "Grapes have been around for 65 million years!",
                    season: "Novemer-May",
                    seasonImage: require("../assets/spring.png"),
                    seasonImage2: require("../assets/autumn.png"),
                },
                watermelon: {
                    fruitname: "Watermelon",
                    priceInSeason:  9.5,
                    priceOutOfSeason: 11.9,
                    fact: "Watermelons are both a fruit and a vegetable",
                    season: "December-May",
                    seasonImage: require("../assets/summer.png"),
                    seasonImage2: require("../assets/autumn.png"),
                },

                strawberry: {
                    fruitname: "Strawberry",
                    priceInSeason:  3.5,
                    priceOutOfSeason: 5,
                    fact: "Strawberries are the first fruit to ripen each spring",
                    season: "October-June",
                    seasonImage: require("../assets/spring.png"),
                    seasonImage2: require("../assets/winter.png"),
                },
            }            
        }
    },
    
    methods:  {

        // The only method in this component which allows for the fruit panel to project the same data as the fruit object that was clicked.
        // a string of the fruit is parsed in such as 'banana' and is then referenced as the object name to retrieve the specified data.      
        handleFruit(temp) {
            this.name = this.fruits[temp].fruitname;
            this.priceInSeason = this.fruits[temp].priceInSeason;
            this.priceOutOfSeason = this.fruits[temp].priceOutOfSeason;
            this.fact = this.fruits[temp].fact;
            this.season = this.fruits[temp].season;
            this.seasonImage = this.fruits[temp].seasonImage;
            this.seasonImage2 = this.fruits[temp].seasonImage2;
        },
    }  
}
</script>

<style>
/* fruit-box-item
=================== */
.fruit-grid {
  border: 1px black;
  /* float: left; */
}

.fruit-grid-image {
  width: 120px;
  height: 130px;
}

.fruit-box-item {
  width: 180px;
  height: 150px;
  padding: 3px 0;
  background-color: #519945;
  margin: 20px;
}

.fruit-box-item:hover {
  background-color: #4f8346;
  cursor: pointer;
}

.fruit-row {
  display: flex;
  margin-left: 75px;
}

.fruit-box-name {
  font-size: 12px;
  background-color: #7aac5b;
}

@media (min-width: 1300px) {
  .fruit-grid {
    margin-top: 100px;
  }
}

@media (max-width: 800px) {
  .fruit-grid-image {
    width: 110px;
    height: 130px;
  }
  .fruit-box-item {
    width: 120;
    height: 90;
    margin: 5px;
    padding: 10px;
  }
  .fruit-row {
    margin-left: 20px;
  }

  .fruit-box-name {
    font-size: 0;
  }
}

@media (max-width: 600px) {
  .fruit-grid-image {
    width: 100px;
    height: 100px;
  }
  .fruit-box-item {
    width: auto;
    height: auto;
    margin: 5px;
    padding: 10px;
  }
  .fruit-row {
    margin-left: 20px;
  }
}

@media (max-width: 400px) {
  .fruit-grid-image {
    width: 60px;
    height: 60px;
  }
  .fruit-box-item {
    width: auto;
    height: auto;
    margin: 5px;
    padding: 10px;
  }
  .fruit-row {
    margin-left: 5px;
  }
}

/* fruit-panel
=================== */

.fruit-panel {
  border-style: solid;
  border-width: 15px;
  border-color: #519945;
  width: 500px;
  height: 600px;
  background-color: #7aac5b;
  float: right;
  margin-left: 100px;
  margin-top: 100px;
  margin-right: 100px;
  justify-content: center;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
}
.small-boxes {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
}
.panel-left-box {
  width: 40%;
  height: 100%;
  background-color: #519945;
  margin: 3px;

}

.panel-right-box {
  width: 40%;
  height: 100%;
  background-color: #519945;
  margin: 3px;

}

.panel-right-box-image {
  width: 200px;
  height: 220px;
}

.panel-left-box-image {
  width: 200px;
  height: 220px;
}

.panel-right-box {
  width: 40%;
  height: 100%;
  background-color: #519945;
  margin: 3px;
}

.panel-content-box {
  width: 80%;
  height: 30%;
  margin: 10%;
  background-color: #519945;
}

@media (max-width: 600px) {
  .fruit-panel {
    width: 300px;
    height: 400px;
    float: right;
    margin-top: 5%;
    font-size: 12px;
  }

  .panel-right-box-image {
    width: 90%;
    height: 80%;
  }

  .panel-left-box-image {
    width: 90%;
    height: 80%;
  }
}

@media (max-width: 400px) {
  .fruit-panel {
    width: 300px;
    height: 400px;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
  }

  .panel-right-box-image {
    width: 80%;
    height: 70%;
  }

  .panel-left-box-image {
    width: 80%;
    height: 70%;
  }
}


</style>




