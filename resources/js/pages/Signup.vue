<template>
    <div>
        <signupc :signup=signup />
    </div>
</template>

<script>
import signupc from '../components/Signup.vue';

    export default {
        name:"signup",
        components:{
            signupc
        },
        methods:{
            signup(){
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>