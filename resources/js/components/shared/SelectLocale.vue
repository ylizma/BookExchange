<template>
  <li class="nav-item dropdown dropbottom">
        <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
            href="#"
        >
            <i class="fa fa-globe"
                ></i
            >
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <a
                href="#"
                class="dropdown-item"
                v-for="entry in languages"
                :key="entry.title"
                @click="changeLocale(entry.language)"
            >
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </a>
        </div>
    </li>
</template>

<script>
export default {
  name: 'SelectLocale',
  data() {
    return {

    }
  },
  computed: {
    languages(){
        return [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'fr', language: 'fr', title: 'Francais' },
            { flag: 'ma', language: 'ar', title: 'العربية' }
        ]
    }
  },
  methods: {
    changeLocale(locale) {
        this.$i18n.locale = locale;
        localStorage.Lang = locale;
    }
  },
}
</script>
