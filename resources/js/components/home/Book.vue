<template>
  <div class="col-lg-3 col-md-6 mb-4 mt-4 mb-lg-0">
				<!-- Card-->
				<div class="card rounded shadow-sm border-0">
					<div class="card-body">
						<img @click="test" :src="(book.img.length>0)?'/images/books/'+book.img[0].image:'https://dummyimage.com/128x200/000000/ffffff'"  alt="" class="img-fluid d-block mx-auto mb-3">
						<h5><router-link :to="{ path: '/exchange/'+book.id}"> {{ book.livre.livre.titre }}  </router-link ></h5>
						<p class="small text-muted font-italic">{{book.livre.livre.resume.substr(1,50)}}...</p>
                        <p class="small text-muted font-italic">
                             <span v-if="this.$i18n.locale!=='ar'">{{ $t('home.book_items.category') }} : {{book.livre.categorie.nom}}</span>
                             <span v-else>{{book.livre.categorie.nom}} : {{ $t('home.book_items.category') }}</span>
                        </p>
						<p class="small text-muted font-italic">
                            <span v-if="this.$i18n.locale!=='ar'">{{ $t('home.book_items.by') }} <a href="#">{{book.user.name}}</a></span>
                            <span v-else><a href="#">{{book.user.name}}</a> {{ $t('home.book_items.by') }}</span>
                        </p>
						<router-link tag="button" class="btn btn-outline-danger" id="button" :to="{ path: '/exchange/'+book.id}">{{ $t('home.book_items.exchange_btn') }}</router-link>
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
