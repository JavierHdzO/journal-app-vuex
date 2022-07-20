import { createRouter, createWebHashHistory } from "vue-router"
import daybookRouter from '@/modules/dayBook/router'


const routes = [
    {
        path: '/', 
        name: 'home',
        component: () => import('@/views/HomeVue.vue')
    }, 
    {
        path: '/about',
        name: 'about',
        component: () => import ('@/views/AboutVue')

    },
    {
        path: '/daybook',
        ... daybookRouter
        
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router