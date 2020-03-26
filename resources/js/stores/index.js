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
	}
});
