import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function route(path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: require(`./pages/${file}.vue`)
  }
}
const router = new Router({
  base: __dirname,
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    route('/login', 'Login', 'login'),
    route('/error', 'Error', 'error')
  ]
})


export default router