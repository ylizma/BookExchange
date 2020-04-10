<template>
  
</template>

<script>
export default {

created(){
    this.$store.dispatch('destroyToken')
    .then(res=>{
        console.log(res.data);
        this.$router.push('/login');
    }).catch(err=>console.error("nohjxbejhbcheb")
    );
}
}
</script>

<style>

</style>