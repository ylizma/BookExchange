<template>
    <div>
        <login :login="login" :message="msg" />
    </div>
</template>

<script>
import Login  from "../../components/auth/Login.vue";
    export default {
        components:{
            Login
        },
        data(){
            return {
                msg:false
            }
        },
        methods:{
            login(user){
                this.$store
                .dispatch('retreiveToken',user)
                .then(response=>{
                    console.log('loged in'); 
                    this.$router.push('/home');
                    })
                .catch(err=>
                {this.msg=true;console.log("error");
                });
            }
        }
        
    }
</script>
