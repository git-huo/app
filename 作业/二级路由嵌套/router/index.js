//配置路由的地方
import Vue from 'vue';

//引入VueRoute
import VueRouter from 'vue-router';


//引入
import Find from '../views/Find.vue';
import List from '../views/List.vue';
import My from '../views/My.vue';
import Find1 from '../views/Second/Find1.vue';
import Find2 from '../views/Second/Find2.vue';
import Find3 from '../views/Second/Find3.vue';
//使用路由
Vue.use(VueRouter)

//配置路由

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/find'
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
            path: '/my',
            component: My,
          
            children: [
                {
                    path: '/find1',
                    component: Find1
                },
                {
                    path: '/find2',
                    component: Find2
                },
                {
                    path: '/find3',
                    component: Find3
                }
            ]
        }
    ]
})