import { createRouter, createWebHashHistory } from "vue-router"
import daybookRouter from '@/modules/dayBook/router'
import auth from "@/modules/auth/router"
import isAuthenticatedGuard from "@/modules/auth/router/auth-guard"



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
        beforeEnter: [ isAuthenticatedGuard ],
        ... daybookRouter
        
    },

    {
        path: "/auth",
        ...auth
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router