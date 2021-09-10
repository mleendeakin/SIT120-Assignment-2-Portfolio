const app = Vue.createApp({
    el:"#myForm",
    data() {
        return { 
           username:'',
           password:'',
           email:'',           
        }
    },
    methods: {
        checkinput () {
            var str = '';
            if(this.username)
            {
               str += 'Username: ' = this.username;
               str += " ";
            }
            if(this.password)
            {
               str = 'Password: ' = this.passowrd;
               str += " ";
            }
            if(this.username)
            {
               str += 'Email: ' = this.email;
               str += " ";
            }
            console.log(str)
        }
    }
})

app.mount("#app")