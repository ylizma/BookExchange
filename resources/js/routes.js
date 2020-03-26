import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '@/js/pages/Signup.vue';
import Login from '@/js/pages/Login.vue';
import Home from '@/js/pages/Home.vue';

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
	},
	{
		path:'/login',
		name:'login',
		component:Login,
		// meta:{
		// 	requiresVisitor:true
		// }
	},
	{
		path:'/home',
		name:'home',
		component:Home,
		// meta:{
		// 	requiresVisitor:true
		// }
	},

	]
});  

export default router;