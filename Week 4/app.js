const app = Vue.createApp({
    data() {
        return {
            heyThere: "Welcome to my page!",
            title: "You hovered over me! Nice to see!",
            message: "Hi there!",
            altMessage: "Oh hello!",
            seen: false,
            showMe: true,
            clickMessage: "Click me!" ,
            clickNumber: 0,
            todos: [
                {text: "Learn JavaScript"},
                {text: "Learn Vue"},
                {text: "Build Something"},
            ]
        }
    },
    methods: {
        printNewMessage: function ()
        {
            this.clickMessage = "you clicked me!";
        },
        numberChanger: function ()
        {
            if(this.clickNumber == 0)
            {
                this.clickNumber++;
            }
            else
            {
                this.clickNumber = this.clickNumber + this.clickNumber
            }
        },

        changeSeen: function()
        {
            this.seen = !this.seen;
        }
    }
})
    

app.mount("#app")