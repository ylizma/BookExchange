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
            <a class="navbar-brand" href="#">Brand</a>
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
                <ul class="nav navbar-nav d-xl-flex">
                    <li class="nav-item" role="presentation"></li>
                    <li class="dropdown menu-large nav-item">
                        <a
                            href="#"
                            class="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            >Categories
                        </a>
                        <ul class="dropdown-menu megamenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <ul>
                                        <li class="dropdown-header">
                                            Glyphicons
                                        </li>
                                        <li>
                                            <a href="#">Available glyphs</a>
                                        </li>
                                        <li class="disabled">
                                            <a href="#">How to use</a>
                                        </li>
                                        <li><a href="#">Examples</a></li>
                                        <li class="divider"></li>
                                        <li class="dropdown-header">
                                            Dropdowns
                                        </li>
                                        <li><a href="#">Example</a></li>
                                        <li>
                                            <a href="#">Aligninment options</a>
                                        </li>
                                        <li><a href="#">Headers</a></li>
                                        <li>
                                            <a href="#">Disabled menu items</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="col-md-3">
                                    <ul>
                                        <li class="dropdown-header">
                                            Button groups
                                        </li>
                                        <li><a href="#">Basic example</a></li>
                                        <li><a href="#">Button toolbar</a></li>
                                        <li><a href="#">Sizing</a></li>
                                        <li><a href="#">Nesting</a></li>
                                        <li>
                                            <a href="#">Vertical variation</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li class="dropdown-header">
                                            Button dropdowns
                                        </li>
                                        <li>
                                            <a href="#"
                                                >Single button dropdowns</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li class="col-md-3">
                                    <ul>
                                        <li class="dropdown-header">
                                            Input groups
                                        </li>
                                        <li><a href="#">Basic example</a></li>
                                        <li><a href="#">Sizing</a></li>
                                        <li>
                                            <a href="#"
                                                >Checkboxes and radio addons</a
                                            >
                                        </li>
                                        <li class="divider"></li>
                                        <li class="dropdown-header">Navs</li>
                                        <li><a href="#">Tabs</a></li>
                                        <li><a href="#">Pills</a></li>
                                        <li><a href="#">Justified</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-3">
                                    <ul>
                                        <li class="dropdown-header">Navbar</li>
                                        <li><a href="#">Default navbar</a></li>
                                        <li><a href="#">Buttons</a></li>
                                        <li><a href="#">Text</a></li>
                                        <li><a href="#">Non-nav links</a></li>
                                        <li>
                                            <a href="#">Component alignment</a>
                                        </li>
                                        <li><a href="#">Fixed to top</a></li>
                                        <li><a href="#">Fixed to bottom</a></li>
                                        <li><a href="#">Static top</a></li>
                                        <li><a href="#">Inverted navbar</a></li>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </li>
                </ul>
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
                            <i class="fa fa-user"></i>
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
                                >Login</router-link
                            >
                            <router-link
                                v-if="!isLogged"
                                to="/signup"
                                class="dropdown-item"
                                >Register</router-link
                            >
                            <router-link
                                v-if="isLogged"
                                to="/profile/infos"
                                class="dropdown-item"
                                >Profile</router-link
                            >
                            <div v-if="isLogged" class="dropdown-divider"></div>
                            <router-link
                                v-if="isLogged"
                                to="/logout"
                                class="dropdown-item"
                                >Logout</router-link
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
        }
    },
    created() {}
};
</script>
<style></style>
