<template>
    <van-sticky offset-top="2.8rem">
        <Search v-model="value" :placeholder="holderText" show-action @search="onSearch" @cancel="onCancel" background="rgb(242,243,245)" />
    </van-sticky>

</template>

<script setup>
import { ref, reactive, watch, defineProps } from 'vue'
import { Search } from 'vant'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()

let holderText = ref('')
let value = ref('')

const props = defineProps({
    default: String,
})

let searchInform = reactive({
})

function onSearch() {
    if (props.default == 'daily') {
        searchInform.date = value.value
    } else if (props.default == 'recently') {
        searchInform['year-month'] = value.value
    } else if (props.default == 'year') {
        searchInform.year = value.value
    }
    store.dispatch('getSearchInform', searchInform)
}

function onCancel() {
    value.value = ''
    searchInform = {}
    getLocalData(`${props.default}`)
}

function getLocalData(key) {
    let storageTimestamp = localStorage.getItem(`${key}Timestamp`);
    let expires = 1000 * 3600 * 12; // 有效时间
    let timestamp = Date.now();  // 当前时间
    if (storageTimestamp && (timestamp - storageTimestamp) < expires) {
        let inform = localStorage.getItem(`${key}Inform`); // 从缓存中拿到数据给程序使用
        store.state.calendar[`${key}Inform`] = JSON.parse(inform);
        return true;
    }
    return false;
}


watch(() => router.currentRoute.value.fullPath, () => {
    if (router.currentRoute.value.fullPath == '/Today') {
        holderText.value = '格式:2022-7-8'
    } else if (router.currentRoute.value.fullPath == '/Recent') {
        holderText.value = '格式:2022-7'
    } else if (router.currentRoute.value.fullPath == '/ThisYear') {
        holderText.value = '格式:2022'
    }
    console.log(router.currentRoute.value.fullPath)
}, { immediate: true })
</script>

<style lang="scss" scoped>
</style>