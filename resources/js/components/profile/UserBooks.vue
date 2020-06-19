<template>
    <div class="col-md-9">
    <div>
        <div class="bg-white p-3">
            <h3>{{ $t('usercp.books.header') }}</h3>
            <router-link to="/newBook" class="btn btn-info mb-3 float-right" type="button">{{ $t('usercp.books.add_new_btn') }}</router-link>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="table-secondary"></th>
                            <th class="table-secondary">{{ $t('usercp.books.table.title') }}</th>
                            <th class="table-secondary">{{ $t('usercp.books.table.date') }}</th>
                            <th class="table-secondary">{{ $t('usercp.books.table.status') }}</th>
                            <th class="table-secondary"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.id">
                            <td class="table-light"><img width="128" height="160" :src="(book.photos[0])?'/images/books/'+book.photos[0].image:'https://dummyimage.com/128x200/000000/ffffff'"></td>
                            <td class="table-light"> {{book.livre.titre}} </td>
                            <td class="table-light"> {{book.created_at}} </td>
                            <td class="table-light">Available</td>
                            <td class="table-light">
                                <div class="row" style="width: 120px;">
                                    <div class="col-auto"><router-link class="action-link" :to="{name:'editBook',params:{id:book.id}}"><i class="fa fa-edit mr-3"></i></router-link></div>
                                    <div class="col-auto"><a class="action-link" href="#"><i class="fa fa-remove"></i></a></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav class="mt-2">
                <ul class="pagination">
                    <li v-for="i in pagination.last_page" :key="i" class="page-item" :class="(i==pagination.current_page?'active':'')">
                        <a  class="page-link" href="#" @click="getBooks(pagination.path+'?page='+i)">{{i}}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
export default {
data(){
    return{
        books:[],
        pagination:{}
    }
},
methods:{
    getBooks(url){
        this.$store.dispatch('getUserBooks',url)
        .then(res=>{
            this.books=res.data.data;
            this.makepagination(res.data);
            console.log(this.pagination);
        })
        .catch(err=>{
            console.error(err);
        });

    },
     makepagination(links){
        let pagination={
            current_page:links.current_page,
            last_page:links.last_page,
            path:links.path
        }
        this.pagination=pagination;
    },
},

mounted(){
    this.getBooks()
}
}
</script>

<style>

</style>
