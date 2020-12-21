import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home'
import Cliente from './components/Cliente'
import Producto from './components/Producto'
import Compra from './components/Compra'
import App from './App'

const routes = [{
        path: '/login',
        name: "root",
        component: App
    }, {
        path: '/home',
        name: "home",
        component: Home
    }, {
        path: '/cliente',
        name: "cliente",
        component: Cliente
    }, {
        path: '/producto',
        name: "producto",
        component: Producto
    },{
        path: '/compra',
        name: "compra",
        component: Compra
    }]
const router = new createRouter({
    history: createWebHistory(),
    routes
})
export default router