<template>
  <div class="col-lg-3 col-md-6 mb-4 mt-4 mb-lg-0">
				<!-- Card-->
				<div class="card rounded shadow-sm border-0">
					<div class="card-body">
						<img @click="test" :src="(book.img.length>0)?book.img[0].image:''" alt="" class="img-fluid d-block mx-auto mb-3">
						<h5> <a href="#" class="text-dark">{{book.livre.livre.titre}} </a></h5>
						<p class="small text-muted font-italic">{{book.livre.livre.resume.substr(1,50)}}...</p>
                        <p class="small text-muted font-italic"> category : {{book.livre.categorie.nom}} </p>
						<p class="small text-muted font-italic">By <a href="#">{{book.user.name}}</a></p>
						<button class="btn btn-outline-danger">Exchange</button>
					</div>
				</div>
    </div>
</template>

<script>
export default {
	props:['book'],
	methods: {
		test(){
			console.log('dd');
			
		}
	},
}
</script>

<style>

</style>