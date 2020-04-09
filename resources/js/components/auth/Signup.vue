<template>
<div>
<form @submit.prevent="signup">
    <div class="d-flex flex-column justify-content-center" id="login-box">
        <div class="login-box-header">
            <h4 style="color:rgb(139,139,139);margin-bottom:0px;font-weight:400;font-size:27px;">Register</h4>
        </div>
        <div v-show="error" :class="msg.error?'alert alert-danger':'alert alert-success'" class=" alert-dismissible fade show" role="alert">
            <center>{{msg.msg}}  {{passwordmsg}}</center>
           
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div class="email-login" style="background-color:#ffffff;">
            <input type="text"  class="text-input form-control" required="" placeholder="Name" v-model="name">
            <div class="mt-2">
                <select v-model="city" class="custom-select" required="" >
                     <option selected value="skalsal" >ville</option>
                     <option v-for="city in villes" :key="city.id" v-bind:value="city.id">{{city.name}}</option>
                </select>
            </div>
            <input type="text" class="email-input form-control" style="margin-top:10px;" required="" placeholder="Email" minlength="6" v-model="email">
            <input type="password" class="password-input form-control" style="margin-top:10px;" required="" placeholder="Password" minlength="" v-model="password">
            <input type="password" class="password-input form-control" style="margin-top:10px;" required="" placeholder="Confirm password" minlength="" v-model="password2">
        </div>
        <div class="submit-row" style="margin-bottom:8px;padding-top:0px;">
            <button type="submit" class="btn btn-primary btn-block box-shadow" id="submit-id-submit">Sign up</button>
        </div>
        
        <div id="login-box-footer" style="padding:10px 20px;padding-bottom:23px;padding-top:18px;">
            <p style="margin-bottom:0px;">Do you have an account?<router-link to="/login">Sign In!</router-link></p>
        </div>
    </div>
</form>
</div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
                return{
                name:'',
                city:'',
                email:'',
                password:'',
                password2:'',
                error:false,
                passwordmsg:'',
                msg:{
                    msg:'',
                    error:false
                },
                villes:[]
                }
            },

        methods: {
            signup(){
                if(this.password!==this.password2){
                    this.passwordmsg="please check your password";
                    this.error=true;
                }else{
                    const user={
                        'name':this.name,
                        'ville':this.city,
                        'email':this.email,
                        'password':this.password
                    };
                    this.$store.dispatch('register',user).then(resp=>{
                        this.msg.msg="your account is succesfuly created"
                        this.msg.error=false
                        this.error=true
                    }
                    ).catch(err=>{
                        this.msg.msg=""
                        this.msg.error=true
                        this.msg.msg="your credetiels are not correct"
                        this.error=true
                    }
                    )
                }
            },
        fetchData(){
            console.log("erere");
            
            this.$store.dispatch('fetchCities').then(res=>{
                this.villes=res.data;
                console.log(res.data);
            }).catch(err=>{
                // console.error(err);
            })
    },
        },
        mounted(){
            this.fetchData();
        }
    }
</script>
