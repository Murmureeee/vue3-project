import exception from './modules/exception'

const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginPage.vue'),
    children: []
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/BaseLayout.vue'),
    children: []
  },
  {
    path: '/fullSreen',
    name: 'fullSreen',
    component: () => import('@/layout/FullScreenLayout.vue'),
    children: []
  },
  ...exception
]

export { constantRouterMap }
