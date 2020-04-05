<template>
<form  @submit.prevent="signin">
      <div class="d-flex flex-column justify-content-center" id="login-box">
        <div class="login-box-header">
            <h4 style="color:rgb(139,139,139);margin-bottom:0px;font-weight:400;font-size:27px;">Login</h4>
        </div>
        <div class="d-flex flex-row align-items-center login-box-seperator-container">
            <div class="login-box-seperator"></div>
        </div>
        <div v-show="err" class="alert alert-danger alert-dismissible fade show" role="alert">
            <center>Your credentials are incorrect !!</center>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div class="email-login" style="background-color:#ffffff;">
            <input v-model="email" type="email" class="email-input form-control" style="margin-top:10px;" required="" placeholder="Email" minlength="">
            <input v-model="password" type="password" class="password-input form-control" style="margin-top:10px;" required="" placeholder="Password" minlength="">
        </div>
        <div class="submit-row" style="margin-bottom:8px;padding-top:0px;">
            <button class="btn btn-primary btn-block box-shadow" id="submit-id-submit" type="submit">Login</button>
            <div class="d-flex justify-content-between">
            <a id="forgot-password-link" href="#">Forgot Password?</a></div>
        </div>
        <div id="login-box-footer" style="padding:10px 20px;padding-bottom:23px;padding-top:18px;">
            <p style="margin-bottom:0px;">Don't you have an account?<a id="register-link" href="#">Sign Up!</a></p>
        </div>
    </div>
</form>
</template>

<script>
export default {
    props:['login','message'],
    data(){
        return{
            email:'',
            password:'',
            err:false
        }
    },
    methods:{
        signin(){
            const user={
                email:this.email,
                password:this.password
            };
            this.login(user);
        }
    },
    watch:{
        message:function(newc,old){
            this.err=true
        }
    }

}
</script>

<style>

</style>