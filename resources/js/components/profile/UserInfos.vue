<template>
  <div class="col-md-9">
                <div>
                    <h3>Profile</h3>
                    <div class="bg-white p-3 ">
                        <form class="form" @submit.prevent="updateProfile" enctype="multipart/form-data">
                            <div class="text-center">
                              <img  class="rounded-circle " width="200" height="200" :src="url" >
                            </div>
                            <input  name="img" type="file" ref="file" @change="Onselect">

                            <div><label class="d-block">Username:</label><input v-model="user.name" class="form-control" type="text" required=""></div>
                            <div><label class="d-block">Email:</label><input v-model="user.email" class="form-control" type="email" required=""></div>
                            <div><label class="d-block">City</label>
                              <select v-model="user.ville_id" class="custom-select" required="">
                                <option v-for="city in villes" :key="city.id" v-bind:value="city.id">
                                        {{city.name}}
                                  </option>
                              </select>
                            </div>
                            <div><label class="d-block">Tel:</label><input v-model="user.telephone" class="form-control" type="text"></div>
                            <div><label class="d-block">Password:</label><input v-model="user.password" class="form-control" type="password"></div>

                            <div class="mt-3"><button class="btn btn-success" type="submit">Save</button></div>
                        </form>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name:'infos',
  data(){
    return {
    user:{
    name : '',
    email : '',
    telephone : '',   
    password:'',
    image:null,
    ville_id:''
    },
    villes:[],
    url:''
    }
  },
  methods:{
     updateProfile(){
       const fd=new FormData();
       if(this.user.image instanceof Blob )
       fd.append('img',this.user.image,this.user.image.name);
       fd.append('name',this.user.name);
       fd.append('email',this.user.email);
       fd.append('telephone',this.user.telephone);
       fd.append('password',this.user.password);
       fd.append('ville_id',this.user.ville_id);        
       this.$store.dispatch('updateProfile',fd).then(res=>{
         this.user=res.data.user;
         this.url="/images/users/"+this.user.image;
         console.log(res.data)
       }).catch(err=>{
        //  console.error(err);
       });
    },
    fetchData(){
      this.$store.dispatch('fetchCities').then(res=>{
        this.villes=res.data;
      }).catch(err=>{
        // console.error(err);
      })
    },
    getUser(){
      this.$store.dispatch('getCurrentUser').then(res=>{
        this.user=res.data;
        this.url="/images/users/"+this.user.image;
      }).catch(err=>{
        // console.error(err);
      })
    },
    Onselect(){
      const file=this.$refs.file.files[0]
      this.user.image=file;
      // console.log(file);
    }
  },
  mounted(){
    this.fetchData();
    this.getUser();
  }
}
</script>

<style>

</style>