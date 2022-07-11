<template>
    <mySearch default="recently"/>
    <holidayCard :holiday="holidayInform"></holidayCard>

</template>

<script setup>
import { reactive, onMounted, computed} from 'vue'
import { useStore } from 'vuex';
import mySearch from '@/components/informSearch.vue'
import holidayCard from '@/components/holidayCard/holidayCard.vue'
const store = useStore()
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

onMounted(() => {
    if (getLocalData('recently')) {
        console.log('get')
    } else {
        store.dispatch('getRecentlyInform', searchInform)
    }

})
let searchInform = reactive({
    'year-month': '',
})
if (searchInform['year-month'] == '') {
    searchInform['year-month'] = year + '-' + month
}
const holidayInform = computed(() => store.state.calendar.recentlyInform.holiday_array);


function getLocalData(key) {
    let storageTimestamp = localStorage.getItem(`${key}Timestamp`);
    let expires = 1000 * 3600 * 12;
    let timestamp = Date.now();
    if (storageTimestamp && (timestamp - storageTimestamp) < expires) {
        let inform = localStorage.getItem(`${key}Inform`); // 从缓存中拿到数据给程序使用
        store.state.calendar[`${key}Inform`] = JSON.parse(inform);
        return true;
    }
    return false;
}

</script>


<style lang="sass">
    
</style>