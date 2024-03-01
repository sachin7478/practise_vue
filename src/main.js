import Vue from 'vue'
import RouterApp from './components/router/RouterApp'
import VueRouter from 'vue-router'
import AboutTemplate from './components/router/AboutTemplate'
import PractiseApp from './PractiseApp.vue'
import NewPractise from './practise/NewPractise.vue'
import PaginationApp from '@/components/PaginationApp'
import NotFound from './components/router/NotFound'
import DynamicComponent from '@/components/DynamicComponent'
import store from './store'
import vuexApp from './components/vuexExample/vuexApp'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);
const routes = [
  {path:'/', component:vuexApp},
  {path:'/about', component:AboutTemplate},
  {path:'/practise', component:PractiseApp},
  {path:'/newPractise', component:NewPractise},
  {path:'/dynamic', component:DynamicComponent},
  {path: '/pagination', component: PaginationApp},
  {path:'/about/:id', component:AboutTemplate},
  {path:'/vuex', component:vuexApp},
  {path:'*', component:NotFound}
]
const router = new VueRouter({routes})
new Vue({
  router:router,
  store,
  render: h => h(RouterApp)
}).$mount('#app')

Vue.filter('toUpper',(val)=>{
  return val.toUpperCase();
})

// custom directives
Vue.directive('newSize', (el, binding)=>{
  switch(binding.value){
    case'small':
      el.style.fontSize='20px'
    break
    case'medium':
      el.style.fontSize='22px'
    break
    case'large':
      el.style.fontSize='25px'
    break
  }
})