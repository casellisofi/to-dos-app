import Vue from 'vue' //importa la libreria vue
import App from './App.vue' //importa el componente app
import VueSimpleAlert from "vue-simple-alert";  //importa la libreria vueSimpleAlert


Vue.use(VueSimpleAlert);
Vue.config.productionTip = false 


/* crea una nueva instancia de Vue a través de la función render, esta función llama al componente que se carga inicialmente*/
new Vue({
  render: h => h(App), 
}).$mount('#app') 
