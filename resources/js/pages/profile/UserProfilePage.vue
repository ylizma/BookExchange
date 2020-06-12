<template>
    <div class="row">
        <div class="col-md-3 mb-3">
            <div class="px-3" style="background-color:white">
                <h5>Shortcuts</h5>
                <div>
                    <router-link
                        to="/profile/infos"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >My profile</router-link
                    >
                    <router-link
                        to="/profile/books"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >My books</router-link
                    >
                    <router-link
                        to="/profile/requests"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >Requests</router-link
                    >

                    <router-link
                        to="/profile/archived"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >Archived Books</router-link
                    >
                </div>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style></style>
