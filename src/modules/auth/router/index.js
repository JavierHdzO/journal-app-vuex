
export default {
    name: "auth",
    component: () => import ("@/modules/auth/layout/AuthLayout.vue"),
    children: [
        {
            path:"",
            name:"login",
            component: () => import ("@/modules/auth/views/LoginVue.vue")
        },
        {
            path:'register',
            name: 'register',
            component: () => import ('@/modules/auth/views/RegisterVue.vue')
        },
        {
            path:':pathMatch(.*)*',
            redirect: "/auth/login"
        }
    ]
}