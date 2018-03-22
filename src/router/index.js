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
const tags = (resolve) => {
  import('../components/tags').then((module) =>{
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
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'index'
    },
    {
      path: '/index',
      component: index,
      name: 'index'
      
    },
    {
      path: '/tags',
      component: tags,
      name: 'tags'
    },
    {
      path: '/tag/:tag',
      component: tag,
      name: 'tag'
    },
    {
      path: '/subject/:id',
      component: subject,
      name: 'subject'
    },
    {
      path: '/top250',
      component: top250,
      name: 'top250'
    }
  ]
})
