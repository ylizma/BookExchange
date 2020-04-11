<template>
    <div>
        <div>
            <navbar />
        </div>
        <div class="row">
            <div class="col-md-3 mb-3">
                    <div class="px-3" style="background-color:white">
                        <h5>Shortcuts</h5>
                        <div>
                            <router-link to="/profile/infos" class="d-block profile-sidebar-link"  style="font-size: 14px;" >My profile</router-link>
                            <router-link to="/profile/books" class="d-block profile-sidebar-link"  style="font-size: 14px;" >My books</router-link>
                            <a class="d-block profile-sidebar-link"  style="font-size: 14px;">Exchange history</a>
                        </div>
                    </div>
                </div>
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from '../../components/shared/Navbar';

export default {
    components: {
        Navbar,
    },
}
</script>

<style>

</style>
