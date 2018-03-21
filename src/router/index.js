import Vue from 'vue'
import Router from 'vue-router'
import pageOne from '../page/page_1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page_1',
      component: pageOne
    }
  ]
})
