<template>
  <fragment>
        <li v-if="!onSidebar" class="nav-item dropdown dropbottom">
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
        <li v-else>
            <span href="#languages" data-toggle="collapse" aria-expanded="false" class="float-right px-4" style="font-size:1.3em;position:relative;top:8px;">
                <i class="fa fa-caret-down" style="cursor:pointer;"></i>
            </span>
            <a >
                {{ $t('navsidebar.languages') }}
            </a>

            <ul class="collapse list-unstyled" id="languages">
                <li v-for="entry in languages"
                    :key="entry.title">
                    <a  href="#"
                        @click="changeLocale(entry.language)"
                    >
                        <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
                    </a>
                </li>
            </ul>

        </li>
    </fragment>

</template>

<script>
export default {
  name: 'SelectLocale',
  data() {
    return {

    }
  },
  props: {
      onSidebar: Boolean,
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
