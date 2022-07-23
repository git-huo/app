//配置路由的地方
import Vue from 'vue';

//引入VueRoute
import VueRouter from 'vue-router';


//引入
import UI_Router from '../views/UI_Router.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import ALL_contacts from '../views/Second/ALL_contacts.vue';
import Alice from '../views/Second/Alice.vue';
import Bob from '../views/Second/Bob.vue';
import Bob1 from '../views/Second/Bob1.vue';
import Bob2 from '../views/Second/Bob2.vue';

//使用路由
Vue.use(VueRouter)

//配置路由

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/ui_router'
        },
        {
            path: '/ui_router',
            component: UI_Router,

        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts,
            children: [
                {
                    name: 'ALL_contacts',
                    path: 'all_contacts',
                    component: ALL_contacts
                },
                {
                    name: 'Alice',
                    path: 'alice',
                    component: Alice
                },
                {
                    name: 'Bob',
                    path: 'bob',
                    component: Bob,
                    children: [
                        {
                            name: 'Bob1',
                            path: 'bob1',
                            component: Bob1,
                        },
                        {
                            name: 'Bob2',
                            path: 'bob2',
                            component: Bob2,
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: About,


        }
    ]
})