<template>
  <div class="myblog">
    <Navbar/>
		{{listArticle}}
		<div class="container">
				<div class="card darken-1" style="background-color:#f2a9cb" v-for="quest in listArticle" :key=quest[key]>
					<div class="card-content black-text" style="background-color:#f2a9cb">
						<span class="card-title" >{{quest.title}}</span>
						<p align="center">{{quest.author.username}}</p>
						<br><br>
						<p align="center" style="background-color:#f2a9cb" v-html="quest.content"></p>
		
					</div>
				</div>
		</div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'myblog',
    components: {
        Navbar
		},
		data(){
			return{
				listArticle:[]
			}
		},
		created(){
			this.getArticles()
		},
		methods:{
			getArticles:function(){
                var token = localStorage.getItem('token')
				axios.get('http://localhost:3000/validate',{headers:{token:token}})
				.then(converttoken=>{
                    console.log(converttoken.data)
                    axios.get(`http://localhost:3000/articles/${converttoken.data.id}`)
                    .then(articles=>{
                        this.listArticle = articles.data
                        console.log(articles);
                        
                    })
                    .catch(err=>{
                        console.log(err);
                        
                    })
                })
			}
		}
}
</script>
