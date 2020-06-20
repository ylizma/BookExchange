<template>
    <nav class="navbar navbar-dark navbar-expand-md sticky-top bg-dark mb-2">
        <div class="container-fluid">
            <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-secondary d-inline d-md-none"
            >
                <i class="fa fa-bars"></i>
            </button>
            <router-link
                to="/"
                class="navbar-brand"
                >
                <img src="/logo.png" alt="" width="30" height="30">
                <i class="ml-2 mt-2">X&Read</i>
                </router-link
            >
            <button
                data-toggle="collapse"
                class="navbar-toggler d-none"
                data-target="#navcol-2"
            >
                <span class="sr-only">Toggle navigation</span
                ><span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse d-md-flex justify-content-md-center align-items-md-center"
                id="navcol-2"
            >
                <ul
                    class="nav navbar-nav d-xl-flex ml-auto justify-content-xl-end"
                >
                <SelectLocale />
                <notifications v-if="isLogged" />
                    <li class="nav-item dropdown dropbottom">
                        <a
                            class="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                            href="#"
                        >
                            <i class="fa fa-user">
                                {{this.$store.getters.user.name}}
                            </i>
                        </a>
                        <div
                            class="dropdown-menu dropdown-menu-right"
                            role="menu"
                            style="postion:absolute;top:44px;right: -20px;"
                        >
                            <router-link
                                v-if="!isLogged"
                                to="/login"
                                class="dropdown-item"
                                >{{ $t('navsidebar.user.login') }}</router-link
                            >
                            <router-link
                                v-if="!isLogged"
                                to="/signup"
                                class="dropdown-item"
                                >{{ $t('navsidebar.user.register') }}</router-link
                            >
                            <router-link
                                v-if="isLogged"
                                to="/profile/infos"
                                class="dropdown-item"
                                >{{ $t('navsidebar.user.profile') }}</router-link
                            >
                            <div v-if="isLogged" class="dropdown-divider"></div>
                            <router-link
                                v-if="isLogged"
                                to="/logout"
                                class="dropdown-item"
                                >{{ $t('navsidebar.user.logout') }}</router-link
                            >
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import Notifications from './Notifications';
import SelectLocale from './SelectLocale';
export default {
    components:{
        Notifications,
        SelectLocale
    },
    data() {
        return {
        };
    },
    computed: {
        isLogged() {
            return this.$store.getters.logedIn;
        },
    },
    created() {}
};
</script>
<style></style>
