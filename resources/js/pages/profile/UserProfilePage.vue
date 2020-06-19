<template>
    <div class="row mt-3">
        <div class="col-md-3 mb-3">
            <div class="px-3" style="background-color:white">
                <h5> {{ $t('usercp.shortcuts.header') }} </h5>
                <div>
                    <router-link
                        to="/profile/infos"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >{{ $t('usercp.shortcuts.myprofile') }}</router-link
                    >
                    <router-link
                        to="/profile/books"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >{{ $t('usercp.shortcuts.mybooks') }}</router-link
                    >
                    <router-link
                        to="/profile/requests/sent"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >{{ $t('usercp.shortcuts.sentrequests') }}</router-link
                    >
                    <router-link
                        to="/profile/requests/received"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >{{ $t('usercp.shortcuts.receivedrequests') }}</router-link
                    >

                    <router-link
                        to="/profile/archived"
                        class="d-block profile-sidebar-link"
                        style="font-size: 14px;"
                        >{{ $t('usercp.shortcuts.archivedbooks') }}</router-link
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
