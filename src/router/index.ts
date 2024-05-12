// router config
// see☞https://router.vuejs.org/zh/
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home/index.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/about/index.vue")
    },
    {
        path: "/setting",
        name: "setting",
        component: () => import("@/views/setting/index.vue"),
        redirect: '/setting/user-info',
        children: [
            {
                path: "user-info",
                name: "user-info",
                component: () => import("@/views/setting/user/index.vue")
            },
            {
                path: "theme",
                name: "theme",
                component: () => import("@/views/setting/theme/index.vue")
            },
            {
                path: "start-home",
                name: "start-home",
                component: () => import("@/views/setting/home/index.vue")
            },
            {
                path: "download",
                name: "download",
                component: () => import("@/views/setting/download/index.vue")
            },
            {
                path: "language",
                name: "language",
                component: () => import("@/views/setting/language/index.vue")
            },
            {
                path: "dev",
                name: "dev",
                component: () => import("@/views/setting/dev/index.vue")
            },
            {
                path: "print",
                name: "print",
                component: () => import("@/views/setting/print/index.vue")
            },
            {
                path: "about",
                name: "about",
                redirect: '/about'
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/views/about/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router