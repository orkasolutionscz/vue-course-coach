import { createRouter, crerateWebHistory } from "vue-router";

import NotFound from "./pages/NotFound.vue";
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';


const router = createRouter({
    history: crerateWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachesDetail, children: [
                { path: 'contact', component: ContactCoach } // /coaches/c1/contact
            ]
        },
        { path: '/register', component: CoachesRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ],

})

export default router;