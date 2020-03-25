<template>
<form @submit.prevent="signup">
    <div class="d-flex flex-column justify-content-center" id="login-box">
        <div class="login-box-header">
            <h4 style="color:rgb(139,139,139);margin-bottom:0px;font-weight:400;font-size:27px;">Register</h4>
        </div>
        <div class="email-login" style="background-color:#ffffff;">
            <input type="text"  class="text-imput form-control" required="" placeholder="Name" v-model="name">
            <input type="text" class="email-input form-control" style="margin-top:10px;" required="" placeholder="Email" minlength="6" v-model="email">
            <input type="password" class="password-input form-control" style="margin-top:10px;" required="" placeholder="Password" minlength="6" v-model="password">
            <input type="password" class="password-input form-control" style="margin-top:10px;" required="" placeholder="Confirm password" minlength="6" v-model="password2">
        </div>
        <div class="submit-row" style="margin-bottom:8px;padding-top:0px;">
            <button type="submit" class="btn btn-primary btn-block box-shadow" id="submit-id-submit">Sign up</button>
        </div>
        <div id="login-box-footer" style="padding:10px 20px;padding-bottom:23px;padding-top:18px;">
            <p style="margin-bottom:0px;">Do you have an account?<a id="register-link" href="#">Sign In!</a></p>
        </div>
    </div>
</form>
</template>

<script>
    export default {
        props:['signup'],
        data(){
                return{
                name:'',
                email:'',
                password:'',
                password2:''
                }
            },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>

</style>