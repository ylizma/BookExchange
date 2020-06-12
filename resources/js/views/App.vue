<template>
<div class="wrapper">
    <sidebar />
    <div id="content">
        <navbar />
        <router-view/>
    </div>
    <a id="goTopBtn" href="#"><i class="fa fa-caret-up" style="color:white;font-size: 2em;line-height: 50px;"></i></a>
    <div class="overlay"></div>
</div>
</template>

<script>
import Navbar from '../../js/components/shared/Navbar';
import Sidebar from '../../js/components/shared/Sidebar';

export default {
    components: {
        Sidebar,
        Navbar,
    },
}
</script>

<style scoped>

</style>
