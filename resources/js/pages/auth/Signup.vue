<template>
    <div>
        <signupc :register="register" :msg="message" />
    </div>
</template>

<script>
import signupc from '../../components/auth/Signup.vue';
import axios from 'axios';

    export default {
        name:"signup",
        components:{
            signupc
        },
        data(){
        return{
            message:{
                msg:'',
                failed:false
            },  
        }
        },
        methods:{
            register(user){
                axios.post('api/register',user).then(resp=>{
                         this.message.msg="votre compte est bien cree, essayez de se connecter a votre compte"
                         this.message.failed=false
                     }).catch(err=>{
                         this.message.msg="Verifiez votre email";
                         this.message.failed=true
                     });
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>