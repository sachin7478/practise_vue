import Vue from 'vue'

import ProgramApp from './ProgramApp.vue';
import './index.css';

new Vue({
  render: h => h(ProgramApp)
}).$mount('#app')

Vue.filter('toUpper',(val)=>{
  return val.toUpperCase();
})
