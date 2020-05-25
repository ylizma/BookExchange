<template>
  <div>
    <div class="bootstrap_cards2">
	<div class="container py-5">
		<div class="row pb-5">
			<homec v-for="(book, index) in books" :key="index" :book="book" />
		</div>
		</div>
	</div>
	<nav class="mt-2 ">
                            <ul class="pagination">
                                <li v-for="i in pagination.last_page" :key="i" class="page-item" :class="(i==pagination.current_page?'active':'')">
                                    <a  class="page-link" href="#" @click="getBooks(pagination.path+'?page='+i)">{{i}}</a>
                                </li>
                            </ul>
                        </nav>
  </div>
</template>

<script>
import Homec from '../../components/home/Book';
export default {
	components:{
		Homec
	},
	data() {
		return {
			books:[],
			pagination:{}
		}
	},
	methods: {
		getBooks(url){
			this.$store.dispatch('getHomeBooks',url)
			.then(res=>{
				this.books = res.data
				this.makepagination(res.meta)
			})
			.catch(err=>console.log(err));
		},
		makepagination(links){
			console.log(links);
			
        let pagination={
            current_page:links.current_page,
            last_page:links.last_page,
            path:links.path
        }
		this.pagination=pagination;
    },
	},
	created(){
		this.getBooks();
	}
}
</script>

<style>

</style>