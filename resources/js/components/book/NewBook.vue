<template>
<div class="col-md-9">
    <div>
                    <h3>Add a new book</h3>
                    
        <div class="bg-white p-3">
                <div>
                    
                    <form>
                                <div class="form-group"><label>Title</label>
                                    <div class="form-row">
                                        <div class="col-9">
                                            <input v-model="book.title" class="form-control" type="text" required="">
                                        </div>
                                        <div class="mt-1 ml-3 text-right">
                                            <button @click="showBooks=true" class="btn btn-primary btn-sm" type="button">Search</button>
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
                                    <option value="12" selected="">This is item 1</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Statuts</label>
                            <select v-model="book.status" class="form-control" style="height: 42px;" required="">
                                    <option value="12" selected="">This is item 1</option>
                            </select>
                        </div>
                        <div class="form-group"><label>Resume</label><textarea v-model="book.resume" class="form-control" required=""></textarea></div>
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
                title:'mine boy',
                type:'',
                categorie_id:'',
                author:'',
                resume:'',
                isbn:'',
                status:'',
                imgs:null,
                
            },
            showBooks:false,
            categories:[],
            apiresult:[],
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
            this.$store.dispatch('getInfoFromGoogleApi',this.book.title).then(res=>{
                res.items.forEach(el => {
                    
                    this.apiresult.push(
                        {
                            title:el.volumeInfo.title,
                            authors:el.volumeInfo.authors,
                            resume:el.volumeInfo.description,
                            isbn:el.volumeInfo.industryIdentifiers[0].identifier,
                            pageCount:el.volumeInfo.pageCount

                        }
                    );
                });
                console.log(this.apiresult);
                
            }).catch(err=>console.error(err)
            );
        },
        choosedOne(index){
            const cbook=this.apiresult[index];
            this.book.title=cbook.title,
            this.book.author=cbook.authors
            this.book.resume=cbook.resume
            this.book.isbn=cbook.isbn
            this.showBooks=false;
        }
    },
    mounted(){
        this.getCategories();
        this.getInfosFromApi();
    }
}
</script>

<style>

</style>