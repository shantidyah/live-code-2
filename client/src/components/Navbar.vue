<template>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      {{seen}}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="seen"><a>Login</a></li>
        <li v-else><a>Logout</a></li>
        <li v-if="seen"><a>Register</a></li>
        <li v-else><a>Add</a></li>
        <li v-if="!seen"><a>My Blog</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'navbar',
     data(){
        return{
            seen:true
        }
    },
    created(){
        var status = localStorage.getItem('token')
        if(status){
            this.seen=false
        }
        else{
            this.seen=true
        }
    },
    methods:{
        register:function(){
            this.$router.replace('/register')
        },
        login:function(){
            this.$router.replace('/login')
        },
        logout:function(){
            localStorage.removeItem('token')
            this.seen=true
            this.$router.replace('/main')
        },
        add:function(){
            this.$router.replace('/addQuest')
        }
    }   
}
</script>
