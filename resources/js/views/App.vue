<template>
<div>
    <navbar />
    <router-view/>
</div>
</template>

<script>
import Navbar from '../../js/components/shared/Navbar';

export default {
    components: {
        Navbar,
    },
}
</script>

<style scoped>

</style>
