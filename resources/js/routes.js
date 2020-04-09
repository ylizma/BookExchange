import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '@/js/components/auth/Signup.vue';
import Login from '@/js/components/auth/Login.vue';
import AuthComponent from '@/js/pages/auth/Auth.vue';
import Home from '@/js/pages/Home.vue';
import UserProfile from '@/js/pages/profile/User.vue';
import UserInfos from '@/js/components/profile/UserInfos.vue';
import UserBooks from '@/js/components/profile/UserBooks.vue';

Vue.use(VueRouter);

const router=new VueRouter({

	mode:'history',
	routes:[
	{
		path:'/auth',
		name:'auth',
		component:AuthComponent,
		children:[
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
		]
	},
	{
		path:'/home',
		name:'home',
		component:Home,
		// meta:{
		// 	requiresVisitor:true
		// }
	},
	{
		path:'/profile',
		component:UserProfile,
		name:'profile',
		children:[
			{
				path:'/profile/infos',
				name:'profileinfos',
				component:UserInfos
			},
			{
				path:'/profile/books',
				name:'profilebook',
				component:UserBooks
			},
		]
	}

	]
});  

export default router;