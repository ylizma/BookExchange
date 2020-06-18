<template>
    <nav id="sidebar">
        <div id="dismiss">
            <i class="fa fa-arrow-left"></i>
        </div>

        <div class="sidebar-header">
            <img class="img-fluid" src="/app/assets/img/logo.png" style="margin-top:20px"/>
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <router-link
                    to="/"
                    >{{ $t('navsidebar.home') }}</router-link
                >
            </li>
            <li>
                <span href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="float-right px-4" style="font-size:1.3em;position:relative;top:8px;">
                    <i class="fas fa-caret-down" style="cursor:pointer;"></i>
                </span>
                <a >
                    {{ $t('navsidebar.categories') }}
                </a>

                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <span href="#pageSubsubmenu-1"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="float-right px-4"
                                style="font-size:1.3em; position:relative;top:8px;"
                            >
                            <i class="fas fa-caret-down" style="cursor:pointer;"></i>
                        </span>
                        <a href="#">
                            category 1
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubsubmenu-1">
                            <li>
                                <a href="#">Sub 1</a>
                            </li>
                            <li>
                                <a href="#">Sub 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            category 2
                        </a>
                    </li>
                </ul>

            </li>
            <li>
                <a href="#">{{ $t('navsidebar.aboutus') }}</a>
            </li>
            <li>
                <a href="#">{{ $t('navsidebar.contactus') }}</a>
            </li>
            <SelectLocale onSidebar />
            <li v-if="!isLogged">
                <router-link
                    to="/login"
                    >{{ $t('navsidebar.user.login') }}</router-link
                >
            </li>
            <li v-if="!isLogged">
                <router-link
                    to="/signup"
                    >{{ $t('navsidebar.user.register') }}</router-link
                >
            </li>
            <li v-if="isLogged">
                <router-link
                    to="/profile/infos"
                    class="dropdown-item"
                    >{{ $t('navsidebar.user.profile') }}</router-link
                >
            </li>
            <li v-if="isLogged">
                <router-link
                    to="/logout"
                    >{{ $t('navsidebar.user.logout') }}</router-link
                >
            </li>
        </ul>
    </nav>
</template>
<style>

</style>
<script>
import SelectLocale from './SelectLocale';
export default {
    components:{
        SelectLocale
    },
    computed: {
        isLogged() {
            return this.$store.getters.logedIn;
        }
    },
}
</script>
