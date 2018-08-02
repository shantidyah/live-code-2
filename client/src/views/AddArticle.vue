<template>
    <div class='addArticle'>
        <Navbar/>
        <!-- {{question}} -->
      <div class="container">
        <h3>Add Article</h3>
        <div class="row">
					<div class="input-field col s6">
						<i class="material-icons prefix">account_box</i>
						<input id="icon_username" type="text" class="validate" v-model="title">
						<label for="icon_username">Title</label>
					</div>
        </div>
			<div class="row">
				<div class="input-field col s6">
					<i class="material-icons prefix">account_box</i>
					<input id="icon_name" type="text" class="validate" v-model="category">
					<label for="icon_name">Category</label>
				</div>
			</div>
				Content
        <wysiwyg v-model="content"/>
        <br>
        <input type="button" value="save" @click="add">
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'login',
    components: {
        Navbar
    },
    data(){
      return{
				content:'',
				title:'',
				category:''
      }
    },
    methods:{
      add:function(){
				if(this.content.length<1){
					swal("", "Content must have content!", "warning");
				}
        var self = this
				var token = localStorage.getItem('token')
				axios.get('http://localhost:3000/validate',{headers:{token:token}})
				.then(converttoken=>{
					console.log(converttoken.data);
					    axios.post('http://localhost:3000/articles/add',{ 
								title: self.title,
								category: self.category,        
								content:self.content,
								author:converttoken.data.id
							})
							.then(quest=>{
								console.log("masuk add question client",quest);
									self.content=''
									self.title=''
									self.category=''
									swal("", "You success add the question!", "success");
							})
							.catch(err=>{
								console.log(err);
								
							})
				})
				.catch(err=>{
					console.log(err);
					
				})

      }
    }
}
</script>

<style>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css"

</style>