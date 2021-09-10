
const app = Vue.createApp({
    data() {
        return {
            message: "test text",
            todos: [
                {item: 'item 1', name:"name 1"},
                {item: 'item 2', name:"name 2"},
                {item: 'item 3', name:"name 3"},
            ],
            headings: [
                {title: "Welcome!"},
                {title: "I'm using Vue!"},
            ],
            count: 0,
            postFontSize: 1,
        }
    },
    
})

app.component('todo-item', {
    props: ['item', 'name' ],
    template: `
    <li>item: {{item}}</li>
    <li>name: {{name}}</li>
    `
})

app.component('number-counter', {
    props: [''],
    template: `
    <button @click='count++'>Click me to increase the count  {{count}}</button>
    <button @click='count--'>Click me to decrease the count  {{count}}</button>

    `,
    data() {
        return {
            count: 0,
        }
    }
})

app.component('titles', {
    props: ['title'],
    template:`
    <div>
    <h1>{{title}}</h1>
    <button @click="$emit('enlarge-text')">Enlarge Text</button>
    <button @click="$emit('decrease-text')">Decrease Text</button>
    </div>   
    `
})




app.mount("#app")