import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.use(Vuex)

const vuex=new Vuex.Store({
	state:{
		token:  localStorage.getItem('access_token') || null,
		user:{},
		bookStatus:["new","old"],
		langs:['frensh','arabic','english']
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
		},
		bookStatus(state){
			return state.bookStatus
		},
		langs(state){return state.langs}
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
		register(context,user){
			return new Promise((resolve,reject)=>{
				axios.post('api/register',user).then(resp=>{
					resolve(resp)
				}).catch(err=>{
					reject(err)
				});
			});
		},
		destroyToken(context){
			if (context.getters.logedIn) {
				const config = {
					headers: {
					   Authorization: "Bearer " + context.state.token
					}
				 };
				return new Promise((resolve,reject) => { 
			    axios.get('/api/logout',config).then(response=>{
	            localStorage.removeItem('access_token');
	            context.commit('destroyToken');
	            resolve(response);
	        }).catch(error=>{
	            // localStorage.removeItem('access_token');
				// context.commit('destroyToken');
				console.error(error);
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
						 console.log(resp.data);
						 
						resolve(resp);
					}).catch(err=>{
						console.error(err);
						reject(err);
					});
				});
			}
		},
		fetchCities(context){
				 
				 return new Promise((resolve,reject)=>{
					axios.get('http://localhost:8000/api/city').then(res=>{
						resolve(res);
					}).catch(err=>{
						reject(err);
					});
				 });
		},
		getCurrentUser(context){
			if(context.getters.logedIn){
			const config = {
				headers: {
				   Authorization: "Bearer " + context.state.token
				}
			 };
			 return new Promise((resolve,reject)=>{
				axios.get('http://localhost:8000/api/user',config).then(res=>{
					context.commit('getUser',res.data.user);
					resolve(res);
				}).catch(err=>{
					reject(err);
				});
			 });
				}
	},
	getCategories(context){
		if(context.getters.logedIn){
			const config = {
				headers: {
				   Authorization: "Bearer " + context.state.token
				}
			 };
			return new Promise((resolve,reject)=>{
				axios.get('http://localhost:8000/api/cats',config).then(resp=>{
					// console.log(resp);
					resolve(resp);
				}).catch(err=>reject(err)
				)
			});
		}
	},
	getInfoFromGoogleApi(context,title){
		return new Promise((resolve,reject)=>{
			Vue.jsonp('https://www.googleapis.com/books/v1/volumes?maxResults=5&q='+title).then(json => {
			resolve(json)
      }).catch(err => {
        reject(err)
      });
		});
	}
	}
});

export default vuex;
