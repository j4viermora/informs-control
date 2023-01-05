
import { RouteRecordRaw } from 'vue-router'
import Login from '../views/auth/Login.vue'
import AddInform from '../views/app/AddInform.vue'



export const routes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/auth/login',
        component: Login
    },
    {
        name: 'add-inform',
        path: '/informs/add',
        component: AddInform
    }
]