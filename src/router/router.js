import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/home/Home'
import Boutique from '@/components/boutique/Boutique'
import Cart from '@/components//cart/Cart'
import User from '@/components/user/User'
import MerCate from '@/components/mer/MerCate'
import SubMerCate from '@/components/mer/SubMerCate'
import Mer from '@/components/mer/Mer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/index/home'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
          
        },{
          path: 'boutique',
          name: 'Boutique',
          component: Boutique
          
        },{
          path: 'cart',
          name: 'Cart',
          component: Cart
          
        },{
          path: 'user',
          name: 'User',
          component: User
          
        },
        {
          path: 'mer',
          name: 'Mer',
          component: Mer
          
        }]
    },
    {
      path: '/merCate',
      name: 'MerCate',
      component: MerCate
      
    },
    {
      path: '/subMerCate/:merCateId',
      name: 'SubMerCate',
      component: SubMerCate
      
    }
  ]
})
