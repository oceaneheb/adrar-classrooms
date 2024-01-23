import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginPageUser from '../views/LoginPageUser.vue'
import LoginPageAdmin from '../views/LoginPageAdmin.vue'
import Dashboard from '../views/Dashboard.vue'
import Course from '../views/Course.vue'
import Class from '../views/Class.vue'
import Profile from '../views/Profile.vue'
import News from '../views/News.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage 
        },
        {
            path: '/loginuser',
            component: LoginPageUser
        },
        {
            path: '/loginadmin',
            component: LoginPageAdmin
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/course',
            component: Course
        },
        {
            path: '/class',
            component: Class
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/settings',
            component: Settings
        },
    ]
})

export default router;