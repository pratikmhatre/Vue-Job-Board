import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './components/home/HomePage.vue'
import AddJob from './components/jobs/AddJob.vue'
export default createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/home', component: HomePage, alias:'/'},
        {path : '/add_job', component : AddJob}
    ]
});