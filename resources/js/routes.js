import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/js/pages/Login.vue';

Vue.use(VueRouter);

const router=new VueRouter({

	mode:'history',
	routes:[
	{
		path:'/login',
		name:'login',
		component:Login,
		// meta:{
		// 	requiresVisitor:true
		// }
	}
	]
});  

export default router;