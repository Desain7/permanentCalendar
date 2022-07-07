import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Today from '../pages/Today/myToday.vue'
import Recent from '../pages/Recent/myRecent.vue'
import ThisYear from '../pages/ThisYear/ThisYear.vue'
import Weather from '../pages/Weather/recentlyWeather.vue'
import Memo from '../pages/Memo/myMemo.vue'



 const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect:'/Today'
        },
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
        {
            name: 'Weather',
            path: '/Weather',
            component:Weather,
        },
        {
            name: 'Memo',
            path: '/Memo',
            component:Memo,
        },
    ]
})

export default router