<template>
    <van-config-provider :theme-vars="themeVars">
        <NavBar :title="thisTitle" :fixed="true">
            <template #right>
                <van-icon name="add-o" size="1.5rem" color="#fff" @click="goMemo" />
            </template>
        </NavBar>
    </van-config-provider>

</template>

<script setup>
import { ref, watch} from 'vue'
import { useRouter} from 'vue-router'
import { NavBar } from 'vant';
const router = useRouter()

let thisTitle = ref('');
console.log(router.currentRoute.value)

watch(() => router.currentRoute.value.fullPath,()=> {
     if (router.currentRoute.value.fullPath == '/Today') {
        thisTitle.value = '当日信息'
    } else if (router.currentRoute.value.fullPath == '/Recent') {
        thisTitle.value = '近期信息'
    } else if (router.currentRoute.value.fullPath == '/ThisYear') {
        thisTitle.value = '当年信息'
    } else if (router.currentRoute.value.fullPath == '/Weather') {
        thisTitle.value = '天气预报'
    } else if (router.currentRoute.value.fullPath == '/Memo') {
        thisTitle.value = '备忘录'
    }
    console.log(router.currentRoute.value.fullPath)
},{immediate:true})

//配置覆盖css变量
const themeVars = {
    navBarBackgroundColor: 'rgb(238,65,64)',
    navBarTitleTextColor: '#fff'
};
function goMemo() {
    router.push('/Memo')
}

</script>


<style lang="scss" scoped>
</style>
