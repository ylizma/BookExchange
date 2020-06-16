import Vue from 'vue';
import './bootstrap';
import App from '@/js/views/App';
import router from '@/js/router/routes.js';
import store from '@/js/stores';
import i18n from '@/js/plugins/i18n.js';
import FlagIcon from 'vue-flag-icon';

Vue.config.productionTip = false

Vue.use(FlagIcon);


const app=new Vue({
	el:'#app',
	router,
    store,
    i18n,
	render:h=>h(App),
});

export default app;
