import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)


export default new Vuex.Store({

	state:{
		token:  localStorage.getItem('access_token') || null
	},
	mutations:{
        // login stuff
		retreiveToken(state,token){
			state.token=token
		},
		destroyToken(state){
			state.token=null
        }
        // --------------------------------------
	},
	getters:{
        //login
		logedIn(state){
			return state.token != null
		}
	},
	actions:{
        //login
		retreiveToken(context,credentials){
			return new Promise((resolve,reject) => { 
			       axios.post('/api/login',{
	            username:credentials.username,
	            password:credentials.password
	        }).then(response=>{
	        	const token=response.data.access_token;
	            localStorage.setItem('access_token',token);
	            context.commit('retreiveToken',token);
	            resolve(response);

	        }).catch(error=>{
	            console.log(error);
	            reject(error)
	        })
	    });
        },

		destroyToken(context){
			axios.defaults.headers.common['Authrization'] = 'Bearer'+context.state.token;
			if (context.getters.logedIn) {
				return new Promise((resolve,reject) => { 
			       axios.post('/api/logout',{
	        }).then(response=>{
	            localStorage.removeItem('access_token');
	            context.commit('destroyToken');
	            resolve(response);

	        }).catch(error=>{
	            localStorage.removeItem('access_token');
	            context.commit('destroyToken');
	            reject(error)
	        })
	    })
			}
		}
	}
});
