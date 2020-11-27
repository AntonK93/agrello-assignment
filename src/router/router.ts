import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Dashboard.vue'),
        redirect: 'profile',
        children: [
            {
                path: '/profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "profile" */ '../views/dashboard/Profile.vue'),
            },
            {
                path: '/containers/:id',
                name: 'container',
                component: () => import(/* webpackChunkName: "container" */ '../views/dashboard/Container.vue'),
            },
        ],
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'disabled',
    base: process.env.BASE_URL,
    routes,
});

export default router;
