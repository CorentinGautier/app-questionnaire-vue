import Vue from 'vue'
import './custom.scss'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

// ajout de boostrap vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
