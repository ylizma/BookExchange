export default function auth ({ next, store }){
    if(!store.getters.logedIn){
        return next({
           name: 'login'
        })
    }
    return next()
   }