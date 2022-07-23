//配置路由的地方
import Vue from 'vue';

//引入VueRoute
import VueRouter from 'vue-router';

import Find from '../views/Find.vue';
import List from '../views/List.vue';
import Part from '../views/Part.vue';
import My from '../views/My.vue';
//使用路由
Vue.use(VueRouter)

//配置路由

export default new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/find'
        },
        {
            path: '/find',
            component: Find,
           
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/part',
            component: Part
        },
        {
            path: '/my',
            component: My
        }
    ]
})