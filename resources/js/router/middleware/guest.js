export default function guest ({ next, store }){
    if(store.getters.logedIn){
        return next({
           name: 'home'
        })
    }
   
    return next()
   }