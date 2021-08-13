import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login.vue'
import Home from '../pages/Home.vue'
import Profile from '../pages/Profile.vue'

Vue.use(VueRouter)


function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
 if(localStorage.getItem('LoginCredentials'))
  isAuthenticated = true;
 else{
  isAuthenticated= false;
 }
  
if(isAuthenticated) {
  if(to.fullPath == '/' || to.fullPath == '/profile'){
    next(); // allow to enter route
  }
  else{
    next('/')
  }
 } else{
  next('/login'); // go to '/login';
 }
 
}

function isLoggedInOrNot(to, from, next){
  var isAuthenticated= false;
  if(localStorage.getItem('LoginCredentials'))
   isAuthenticated = true;
  else
   isAuthenticated= false;
 if(!isAuthenticated) {
   if(to.fullPath == '/login'){
    next(); // allow to enter login page
   }
   else{
     next('/login')
   }

  } else{
   next('/profile'); // go to '/profile';
  }
}

const routes = [

  { 'path': '/', name: Home, beforeEnter : guardMyroute, component: Home },
  { 'path': '/login', name: Login, beforeEnter:isLoggedInOrNot, component: Login},
  { 'path': "/profile", name:Profile, beforeEnter : guardMyroute, component: Profile, },
  { 'path': "/:catchAll(.*)", beforeEnter:guardMyroute, component: Home }
]

export const router = new VueRouter({
  mode: 'history',
  routes 
})

