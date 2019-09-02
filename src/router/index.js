import Vue from 'vue';
import Router from 'vue-router';
import MyPos from '@/components/page/Pos';
import HelloWorld from '@/components/page/HelloWorld';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'aa',
            component: MyPos
        },
        {
            path: '/bb',
            name: 'bb',
            component: HelloWorld
        }
    ]
})