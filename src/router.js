import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './components/home/HomePage.vue'
export default createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/home', component: HomePage, alias:'/'},
    ]
});