<template>
        <div class="main-form">
            <form action="" id="myForm">
            <h3>Give us some Feedback! Is there a specific fruit you want?</h3>
            <label for="name">Name: </label>
            <input id="name" v-model.lazy="username" type="text" placeholder="Myname"> <br><br>

            <label for="name">Age: </label>
            <input id="age" v-model.number="age" type="number" placeholder="Age"> <br><br>

            <label for="email">Email: </label>
            <input id="email" v-model.lazy="email" type="text" placeholder="example@gmail.com"> <br><br>

            <label for="fruit">Fruit: </label>
            <input id="fruit" v-model.trim="fruitName" type="text" placeholder="Fruit Name"> <br><br>

            <button @click="checkInput">Submit</button>
            
            </form>   
        </div>
        <div class="fruit-vote">
            <h3>Vote for the next fruit to be added!</h3>
            <input type="checkbox" id="pear" value="Pear" v-model="checkedFruit">
            <label for="pear">Pear</label>
            <input type="checkbox" id="cherry" value="Cherry" v-model="checkedFruit">
            <label for="cherry">Cherry</label>
            <input type="checkbox" id="mango" value="Mango" v-model="checkedFruit">
            <label for="mango">Mango</label>
            <input type="checkbox" id="lemon" value="Lemon" v-model="checkedFruit">
            <label for="lemon">Lemon</label>
            <br>
            <span>checked Fruit: {{checkedFruit}}</span>
        </div>

        <div>
            <h3>Select your favourite page!!</h3>
            <select v-model="selected">
            <option v-for="option in options" :value="option.value">
            {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>
        </div>
    
        


</template>



<script>
export default {
    data () {
        return {
            username:'',
            age:'',
            email:'',
            fruitName:'',
            checkedFruit: [],
            selected: 'A',
      options: [
        { text: 'Home', value: 'A' },
        { text: 'Seasons', value: 'B' },
        { text: 'Recipes', value: 'C' },
        { text: 'About', value: 'C' }
      ]
        }
    }
}


</script>


<style>
.main-form {
    color: white;
}

.fruit-vote{
    color: white;
}

</style>
