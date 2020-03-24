import Vue from 'vue';
import App from '@/js/views/App';
import router from '@/js/routes.js';

Vue.config.productionTip = false

const app=new Vue({
	el:'#app',
	router,
	render:h=>h(App),
});

export default app;
