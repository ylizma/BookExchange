import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/js/stores';
// authentication
import Signup from '@/js/components/auth/Signup.vue';
import Login from '@/js/components/auth/Login.vue';
import AuthComponent from '@/js/pages/auth/Auth.vue';
import Logout from '@/js/components/auth/Logout.vue';
// components
import Home from '@/js/pages/Home.vue';
import UserProfile from '@/js/pages/profile/User.vue';
import UserInfos from '@/js/components/profile/UserInfos.vue';
import UserBooks from '@/js/components/profile/UserBooks.vue';

// middleware
import guest from '@/js/router/middleware/guest'
import auth from '@/js/router/middleware/auth'
import middlewarePipeline  from '@/js/router/middlewarePipeline'

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
				meta:{
					middleware:[
						guest
					]
				}
			},
			{
				path:'/login',
				name:'login',
				component:Login,
				meta:{
					middleware:[
						guest
					]
				}
			},
			{
				path:'/logout',
				name:'logout',
				component:Logout,
			},
		]
	},
	{
		path:'/home',
		name:'home',
		component:Home,
		meta:{
			middleware:[
				auth
			]
		}
	},
	{
		path:'/profile',
		component:UserProfile,
		name:'profile',
		meta:{
			middleware:[
				auth
			]
		},
		children:[
			{
				path:'/profile/infos',
				name:'profileinfos',
				component:UserInfos,
				meta:{
					middleware:[
						auth
					]
				}
			},
			{
				path:'/profile/books',
				name:'profilebook',
				component:UserBooks,
				meta:{
					middleware:[
						auth
					]
				}
			},
		]
	}

	]
});  

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }


    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

})

export default router;