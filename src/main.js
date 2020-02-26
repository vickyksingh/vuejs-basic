import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
Vue.config.productionTip = false
import Contact from './components/contact.vue';


export const eventBus = new Vue()
//creating eventBus for component communication 
Vue.component('app-hello', HelloWorld )
Vue.component('app-contact', Contact)
//creating globle filter

Vue.filter(
  'toFixed' , function(value, limit){
      return value.toFixed(limit)
  }
)
//creating directive
Vue.directive('hilight' , {
  bind(el){
   el.style.color = 'red'
  }
})



new Vue({
  
  render: h => h(App),
}).$mount('#app')
