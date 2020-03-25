import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '@/js/pages/Signup.vue';

Vue.use(VueRouter);

const router=new VueRouter({

	mode:'history',
	routes:[
	{
		path:'/signup',
		name:'signup',
		component:Signup,
		// meta:{
		// 	requiresVisitor:true
		// }
	}
	]
});  

export default router;