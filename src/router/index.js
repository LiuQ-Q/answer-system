import Vue from 'vue'
import Router from 'vue-router'
import Paper from '@/components/AnswerArea.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/paper',
      component: Paper
    },
    {
      path: '/',
      redirect: '/paper'
    }
  ]
})
