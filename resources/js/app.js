import Vue from 'vue';
import App from '@/js/views/App';
import router from '@/js/routes.js';
import store from '@/js/stores';


Vue.config.productionTip = false

const app=new Vue({
	el:'#app',
	router,
	store,
	render:h=>h(App),
});

export default app;
