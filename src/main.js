import Vue from 'vue' 
import App from './App.vue' 
import VueSimpleAlert from "vue-simple-alert"; 


Vue.use(VueSimpleAlert);
Vue.config.productionTip = false 


/* crea una nueva instancia de Vue */
new Vue({
  render: h => h(App), // la función render llama al componente que se carga inicialmente
}).$mount('#app') 
