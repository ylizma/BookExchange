<template>
    <div class="mt-5 container">
        <div class="row">
            <div class="col">
                <div>
                    <h3>Exchange</h3>

                    <div class="bg-white p-3">
                        <div v-show="submitted" class="alert alert-success" role="alert">
                            Exchange request sent !!
                        </div>
                        <router-link tag="button" class="btn btn-danger mb-3" id="button" to="/">Go back!</router-link>
                        <div>
                            <form @submit.prevent="submitExchangeRequest">
                                <div class="form-group"><label>Desired book:</label>
                                    <div>
                                        <div class="form-row" v-if="desired_book.livre !== undefined">
                                            <div class="col text-center">
                                                <img :src="(desired_book.img.length>0)?desired_book.img[0].image:''" alt="" class="img-fluid" />
                                            </div>
                                            <div class="col">
                                                <h4 class="text-center"><strong> {{ desired_book.livre.livre.titre }} </strong></h4>
                                                <p><strong>Resume:</strong> {{ desired_book.livre.livre.resume }}.<br /><br /><br /></p>
                                                <p><strong>Owner:</strong> {{ desired_book.user.name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Select one of your books:</label>
                                    <select v-model="exchange.selected_book_id" class="form-control" style="height: 42px;" required="">
                                        <option v-for="book in user_books" :key="book.id"  :value="book.id" selected=""> {{book.livre.livre.titre}} </option>
                                    </select>
                                </div>
                                <div
                                    class="form-row">
                                    <div class="col offset-xl-10 text-right"><button class="btn btn-outline-success" type="submit">Send Exchange Request</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            exchange: {
                desired_book_id: this.$route.params.id,
                selected_book_id: '',
            },
            desired_book:{},
            user_books:[],
            submitted: false,
        }
    },
    methods:{
        getUserBooks(){
            this.$store.dispatch('getUserActualBooks').then(res=>{
                this.user_books=res.data;
                console.log(res.data);
                console.log(JSON.stringify(this.user_books))
            }).catch(err=>{
                console.error(err);
            });
        },
        getDesiredBookInfos(){
            this.$store.dispatch('getBookInfos',this.$route.params.id).then(res=>{
                this.desired_book=res.data;
                console.log(res.data);
                console.log(JSON.stringify(this.desired_book))
            }).catch(err=>{
                console.error(err);
            });
        },
        submitExchangeRequest(){
            console.log('submit');
            const fd=new FormData();
            fd.append('my_book',this.exchange.selected_book_id)
            fd.append('desired_book',this.exchange.desired_book_id)

            this.$store.dispatch('addExchangeRequest',fd)
            .then(res=>{
                this.submitted=true;
            })
            .catch(err=>{

            });
        }
    },
    mounted(){
        this.getDesiredBookInfos();
        this.getUserBooks();
    }
}
</script>
