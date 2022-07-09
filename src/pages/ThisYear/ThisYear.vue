<template>
    <mySearch/>
    <holidayCard :holiday="holidayInform"></holidayCard>
</template>

<script setup>
import {reactive, onMounted, computed} from 'vue'
import { useStore } from 'vuex';
import mySearch from '@/components/informSearch.vue'
import holidayCard from '@/components/holidayCard/holidayCard.vue'
const store = useStore()
let date = new Date();
let year = date.getFullYear();

onMounted(() => {
    if (getLocalData('year')) {
        console.log(123)
    } else {
        store.dispatch('getYearInform', searchInform)
    }

})
let searchInform = reactive({
    'year': '',
})
if (searchInform['year'] == '') {
    searchInform['year'] = year
}

const holidayInform = computed(() => store.state.calendar.yearInform);

function getLocalData(key) {
    let storageTimestamp = localStorage.getItem(`${key}Timestamp`);
    let expires = 1000 * 3600 * 24;
    let timestamp = Date.now();
    if (storageTimestamp && (timestamp - storageTimestamp) < expires) {
        let inform = localStorage.getItem(`${key}Inform`);
        store.state.calendar[`${key}Inform`] = JSON.parse(inform);
        return true;
    }
    return false;
}

</script>

<style lang="sass">
    
</style>