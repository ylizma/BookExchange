<template>
    <div class="mt-5 container">
        <div class="row">
            <div class="col">
                <div>
                    <h3> {{ $t('exchange.header') }} </h3>

                    <div class="bg-white p-3">
                        <div v-show="submitted || hasError" class="alert" v-bind:class="{ 'alert-danger': hasError, 'alert-success': !hasError }" role="alert">
                            {{alert_message}}
                        </div>
                        <router-link tag="button" class="btn btn-danger mb-3" id="button" to="/">{{ $t('exchange.goback') }}</router-link>
                        <div>
                            <form @submit.prevent="submitExchangeRequest">
                                <div class="form-group"><label>{{ $t('exchange.desired_book') }}</label>
                                    <div>
                                        <div class="form-row" v-if="desired_book.livre !== undefined">
                                            <div class="col text-center">
                                                <img :src="(desired_book.img.length>0)?desired_book.img[0].image:''" alt="" class="img-fluid" />
                                            </div>
                                            <div class="col">
                                                <h4 class="text-center"><strong> {{ desired_book.livre.livre.titre }} </strong></h4>
                                                <p><strong>{{ $t('exchange.summary') }} :</strong> {{ desired_book.livre.livre.resume }}.<br /><br /><br /></p>
                                                <p><strong>{{ $t('exchange.owner') }} :</strong> {{ desired_book.user.name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>{{ $t('exchange.select_one_book') }}</label>
                                    <select v-model="selected_book" class="form-control" style="height: 42px;" required="">
                                        <option v-for="book in user_books" :key="book.id"  :value="book" selected=""> {{book.livre.livre.titre}} </option>
                                    </select>
                                </div>
                                <div
                                    class="form-row">
                                    <div class="col offset-xl-10 text-right"><button class="btn btn-outline-success" type="submit">{{ $t('exchange.send_request') }}</button></div>
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
            selected_book: {},
            desired_book:{},
            user_books:[],
            submitted: false,
            hasError: false,
            alert_message: '',
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
            if(this.selected_book.livre.livre.id === this.desired_book.livre.livre.id){
               this.alert_message = "you can't exchange with the same book";
               this.hasError = true;
            }else{
                const fd=new FormData();
                fd.append('my_book',this.selected_book.id)
                fd.append('desired_book',this.desired_book.id)

                this.$store.dispatch('addExchangeRequest',fd)
                .then(res=>{
                    this.submitted=true;
                    this.alert_message = "Exchange request sent !!";
                    this.hasError = false;
                })
                .catch(err=>{

                });
            }
        }
    },
    mounted(){
        this.getDesiredBookInfos();
        this.getUserBooks();
    }
}
</script>
