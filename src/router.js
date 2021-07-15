import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/NotFound.vue";
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList, name: 'coaches-list' },
        {
            path: '/coaches/:id',
            component: CoachesDetail,
            props: true,
            name: 'coach-detail', children: [
                { path: 'contact', props: true, component: ContactCoach } // /coaches/c1/contact
            ]
        },
        { path: '/register', component: CoachesRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ],

})

export default router;