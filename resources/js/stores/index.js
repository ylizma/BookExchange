import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		token:  localStorage.getItem('access_token') || null,
		user:{}
	},
	mutations:{
        // login stuff
		retreiveToken(state,token){
			state.token=token
		},
		destroyToken(state){
			state.token=null
        },
		// --------------------------------------
		getUser(state,user){
			state.user=user
		}
	},
	getters:{
        //login
		logedIn(state){
			return state.token != null
		}
	},
	actions:{
		
		//login
		retreiveToken(context,user){
			return new Promise((resolve,reject) => { 
			       axios.post('/api/login',{
	            email:user.email,
	            password:user.password
	        }).then(response=>{
	        	const token=response.data.access_token;
	            localStorage.setItem('access_token',token);
				context.commit('retreiveToken',token);
	            resolve(response);

	        }).catch(error=>{
	            console.log(error);
	            reject(error)
	        })
	    })
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
		},
		 getProfileInfo(context){
			// axios.defaults.headers.common['Authrization'] = 'Bearer '+context.state.token;
			if(context.getters.logedIn){
				const config = {
					headers: {
					   Authorization: "Bearer " + context.state.token
					}
				 };
				return new Promise((resolve,reject)=>{
					 axios.get('http://localhost:8000/api/profile',config).then(resp=>{
						resolve(resp);
					}).catch(err=>{
						console.error(err);
						reject(err);
					});
				})
			}
		},
		updateProfile(context,user){
			// axios.defaults.headers.common['Authrization'] = 'Bearer '+context.state.token;
			if(context.getters.logedIn){
				const config = {
					headers: {
					   Authorization: "Bearer " + context.state.token,
					   'content-type': 'multipart/form-data' 
					}
				 };
				return new Promise((resolve,reject)=>{
					 axios.post('http://localhost:8000/api/update',user,config).then(resp=>{
						 context.commit('getUser',resp.data.user)
						resolve(resp);
					}).catch(err=>{
						console.error(err);
						reject(err);
					});
				});
			}
		},
		fetchCities(context){
			 if(context.getters.logedIn){
				const config = {
					headers: {
					   Authorization: "Bearer " + context.state.token
					}
				 };
				 return new Promise((resolve,reject)=>{
					axios.get('http://localhost:8000/api/city').then(res=>{
						resolve(res);
					}).catch(err=>{
						reject(res);
					});
				 });
			 }
		},
		getCurrentUser(context){
			if(context.getters.logedIn){
			const config = {
				headers: {
				   Authorization: "Bearer " + context.state.token
				}
			 };
			 console.log(context.getters.logedIn);
			 
			 return new Promise((resolve,reject)=>{
				axios.get('http://localhost:8000/api/user',config).then(res=>{
					context.commit('getUser',res.data.user);
					resolve(res);
				}).catch(err=>{
					reject(err);
				});
			 });
				}
	}
	}
});
