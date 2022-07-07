import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Today from '../pages/Today/myToday.vue'
import Recent from '../pages/Recent/myRecent.vue'
import ThisYear from '../pages/ThisYear/ThisYear.vue'



 const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'Today',
            path: '/Today',
            component:Today,
        },
        {
            name: 'Recent',
            path: '/Recent',
            component:Recent,
        },
        {
            name: 'ThisYear',
            path: '/ThisYear',
            component:ThisYear,
        },
    ]
})

export default router