<template>
<div class="col-md-9">
    <div>
                    <h3>Add a new book</h3>
                    
        <div class="bg-white p-3">
                <div>
                    <form @submit.prevent="saveBook">
                                <div class="form-group"><label>Title</label>
                                    <div class="form-row">
                                        <div class="col-9">
                                            <input v-model="book.title" class="form-control" type="text" required="">
                                        </div>
                                        <div class="mt-1 ml-3 text-right">
                                            <button @click="getInfosFromApi" class="btn btn-primary btn-sm" type="button">Search</button>
                                        </div>
                                    </div>
                                    <ul v-show="showBooks" class="list-group mt-1" >
                                        <li v-for="(item,index) in apiresult" :key="index" class="list-group-item">
                                          <a @click="choosedOne(index)" href="#"> {{item.title}} ,writen by: {{item.authors}} ,pages:{{item.pageCount}} </a>
                                        </li>
                                    </ul>
                                </div>
                        
                        <div class="form-group"><label>ISBN</label><input v-model="book.isbn" class="form-control" type="text" required=""></div>
                        <div class="form-group"><label>Auteurs</label><input v-model="book.author" class="form-control" type="text" required=""></div>
                        <div class="form-group">
                            <label>Category</label>
                            <select v-model="book.category" class="form-control" style="height: 42px;" required="">
                                    <option v-for="cat in categories" :key="cat.id"  selected=""> {{cat.nom}} </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Statuts</label>
                            <select v-model="book.status" class="form-control" style="height: 42px;" required="">
                                    <option v-for="(st,index) in status" :key="index" > {{st}} </option>
                            </select>
                        </div>
                        <div class="form-group"><label>Resume</label><textarea v-model="book.resume" class="form-control" required=""></textarea></div>
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
                            <div class="col offset-xl-10 text-right"><button class="btn btn-primary" type="submit">Add book</button></div>
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
                type:'',
                categorie_id:'',
                author:'',
                resume:'',
                isbn:'',
                status:'',
                imgs:[],
                
            },
            showBooks:false,
            categories:[],
            apiresult:[],
            status:[],
            url:[]
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
            this.book.author=cbook.authors
            this.book.resume=cbook.resume
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
            fd.append('type',this.book.type)
            fd.append('author',this.book.author)
            fd.append('resume',this.book.resume)
            fd.append('isbn',this.book.isbn)
            fd.append('status',this.book.status)
            fd.append('categorie_id',this.book.categorie_id)
            for (let i = 0; i < this.book.imgs.length; i++) {
                fd.append('imgs[' + i + ']', this.book.imgs[i],this.book.imgs[i].name);
            }
        }   
    },
    mounted(){
        this.getCategories();
        this.status=this.$store.getters.bookStatus
    }
}
</script>

<style>

</style>