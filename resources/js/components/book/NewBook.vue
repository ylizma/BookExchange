<template>
<div class="col-md-9">
    <div>
                    <h3>{{ $t('newBook.header') }}</h3>

        <div class="bg-white p-3">
            <div v-show="saved" class="alert alert-success" role="alert">
            {{ $t('newBook.success') }} !!
            <router-link to="/profile/books">{{ $t('newBook.preview') }}</router-link >
            </div>
                <div>
                    <form @submit.prevent="saveBook">
                                <div class="form-group"><label>{{ $t('newBook.title') }}</label>
                                    <div class="form-row">
                                        <div class="col-9">
                                            <input v-model="book.title" class="form-control" type="text" required="">
                                        </div>
                                        <div class="mt-1 ml-3 text-right">
                                            <button @click="getInfosFromApi" class="btn btn-primary btn-sm" type="button">{{ $t('newBook.search_btn') }}</button>
                                        </div>
                                    </div>
                                    <ul v-show="showBooks" class="list-group mt-1" >
                                        <li v-for="(item,index) in apiresult" :key="index" class="list-group-item">
                                          <a @click="choosedOne(index)" href="#"> {{item.title}} ,writen by: {{item.authors}} ,pages:{{item.pageCount}} </a>
                                        </li>
                                    </ul>
                                </div>

                        <div class="form-group"><label>{{ $t('newBook.isbn') }}</label><input v-model="book.isbn" class="form-control" type="text" required=""></div>
                        <div class="form-group"><label>{{ $t('newBook.authors') }}</label><input v-model="book.author" class="form-control" type="text" required=""></div>
                        <div class="form-group">
                            <label>{{ $t('newBook.category') }}</label>
                            <select v-model="book.categorie_id" class="form-control" style="height: 42px;" required="">
                                    <option v-for="cat in categories" :key="cat.id"  :value="cat.id" selected=""> {{cat.nom}} </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>{{ $t('newBook.status') }}</label>
                            <select v-model="book.status" class="form-control" style="height: 42px;" required="">
                                    <option v-for="(st,index) in status" :key="index" :value="st" > {{st}} </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>{{ $t('newBook.language') }}</label>
                            <select v-model="book.lang" class="form-control" style="height: 42px;" required="">
                                    <option v-for="(l,index) in langs" :key="index" :value="l"> {{l}} </option>
                            </select>
                        </div>
                        <div class="form-group"><label>{{ $t('newBook.summary') }}</label><textarea v-model="book.resume" class="form-control" required=""></textarea></div>
                        <div class="form-group">
                            <input required="required" type="file" ref="imgs" multiple="multiple" @change="onImageSelect">
                        </div>
                        <div class="form-group" style="display:inline">
                            <div v-for="(pic,index) in url" :key="index">
                                <a href="#" @click="onDeleteImage(index)">
                                    <img :src="pic" width="100" height="100" >
                                </a>
                            </div>
                        </div>
                        <div
                            class="form-row">
                            <div class="col offset-xl-10 text-right"><button class="btn btn-primary" type="submit">{{ $t('newBook.add_btn') }}</button></div>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            book:{
                title:'',
                categorie_id:'',
                author:'',
                resume:'',
                isbn:'',
                status:'',
                imgs:[3],
                lang:'',
                pages:''
            },
            showBooks:false,
            categories:[],
            apiresult:[],
            status:[],
            url:[],
            langs:[],
            saved:false
        }
    },
    methods:{
        getCategories(){
            this.$store.dispatch('getCategories').then(res=>{
                this.categories=res.data;
                // console.log(res.data);
            }).catch(err=>{
                console.error(err);
            });
        },
        getInfosFromApi(){
                        if(this.book.title!==''){
            this.$store.dispatch('getInfoFromGoogleApi',this.book.title).then(res=>{
                console.log(res.items);

                res.items.forEach(el => {
                    this.apiresult.push(
                        {
                            title:el.volumeInfo.title,
                            authors:el.volumeInfo.authors,
                            resume:el.volumeInfo.description,
                            isbn:el.volumeInfo.industryIdentifiers,
                            pageCount:el.volumeInfo.pageCount
                        }
                    );
                });
                this.showBooks=true;

            }).catch(err=>console.error(err));
                        }
        },
        choosedOne(index){
            const cbook=this.apiresult[index];
            this.book.title=cbook.title,
            this.book.author=cbook.authors.join(',')
            this.book.resume=cbook.resume
            this.book.pages = cbook.pageCount
            this.book.isbn=cbook.isbn[0].identifier
            this.showBooks=false;
            },
        onImageSelect(){
            for (let i = 0; i < this.$refs.imgs.files.length; i++) {
                this.book.imgs.push(this.$refs.imgs.files[i])
                this.url.push(URL.createObjectURL(this.$refs.imgs.files[i]));
            }
        },
        onDeleteImage(index){
            this.$delete(this.book.imgs,index);
            this.$delete(this.url,index);
        },
        saveBook(){
            const fd=new FormData();
            fd.append('title',this.book.title)
            fd.append('author',this.book.author)
            fd.append('resume',this.book.resume)
            fd.append('isbn',this.book.isbn)
            fd.append('lang',this.book.lang)
            fd.append('status',this.book.status)
            fd.append('nbrpage',this.book.pages)
            fd.append('categorie_id',this.book.categorie_id)
            for (let i = 0; i < this.book.imgs.length; i++) {
                fd.append('imgs[' + i + ']', this.book.imgs[i]);
            }

            this.$store.dispatch('addNewBook',fd)
            .then(res=>{
                this.saved=true;
            })
            .catch(err=>{

            });
        }
    },
    mounted(){
        this.getCategories();
        this.status=this.$store.getters.bookStatus
        this.langs=this.$store.getters.langs
    }
}
</script>

<style>

</style>
