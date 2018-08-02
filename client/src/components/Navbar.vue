<template>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <!-- {{seen}} -->
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="seen"><a @click='login'>Login</a></li>
        <li v-else><a @click="logout">Logout</a></li>
        <li v-if="seen"><a @click="register">Register</a></li>
        <li v-else><a @click="add">Add</a></li>
        <li v-if="!seen"><a @click="myBlog">My Blog</a></li>
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
            this.$router.replace('/blog')
        },
        add:function(){
            this.$router.replace('/add')
        },
        myBlog:function(){
            this.$router.replace('/myblog')
        }
    }   
}
</script>
