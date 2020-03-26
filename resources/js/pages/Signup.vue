<template>
    <div>
        <signupc :register="register" :msg="message" />
    </div>
</template>

<script>
import signupc from '../components/Signup.vue';
import axios from 'axios';

    export default {
        name:"signup",
        components:{
            signupc
        },
        data(){
        return{
            message:'',  
        }
        },
        methods:{
            register(user){
                axios.post('api/register',user).then(resp=>{
                         this.message="votre compte est bien cree, essayez de se connecter a votre compte"
                     }).catch(err=>{
                         this.message="Verifiez votre email";
                     });
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>