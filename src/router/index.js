import Vue from 'vue'
import Router from 'vue-router'
import AnswerArea from '@/components/AnswerArea.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AnswerArea',
      component: AnswerArea
    }
  ]
})
