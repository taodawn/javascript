import Vue from 'vue'
import './plugins/vuetify'
// import App from './App.vue'
import App from './examples/layouts/googleKeep'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
