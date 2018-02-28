import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = (resolve) => {
  import('../components/index').then((module) =>{
    resolve(module)
  })
}

const tag = (resolve) => {
  import('../components/tag').then((module) =>{
    resolve(module)
  })
}
const subject = (resolve) => {
  import('../components/subject').then((module) =>{
    resolve(module)
  })
}
const top250 = (resolve) => {
  import('../components/top250').then((module) =>{
    resolve(module)
  })
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/tag',
      component: tag
    },
    {
      path: '/subject',
      component: subject
    },
    {
      path: '/top250',
      component: top250
    }
  ]
})
