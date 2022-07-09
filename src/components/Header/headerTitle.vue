<template>
    <van-config-provider :theme-vars="themeVars">
        <NavBar :title="thisTitle" fixed='true'>
            <template #left>
                <van-icon name="smile-o" size="2rem" color="#fff" @click="goWeather" />
            </template>
            <template #right>
                <van-icon name="add-o" size="2rem" color="#fff" @click="goMemo" />
            </template>
        </NavBar>
    </van-config-provider>

</template>

<script setup>
import { ref} from 'vue'
import { useRouter} from 'vue-router'
import { NavBar } from 'vant';

let thisTitle = ref('当天信息');
const router = useRouter()

//配置覆盖css变量
const themeVars = {
    navBarBackgroundColor: 'rgb(238,65,64)',
    navBarTitleTextColor: '#fff'
};

function goWeather() {
    router.push('/Weather')
}
function goMemo() {
    router.push('/Memo')
}

</script>


<style lang="scss" scoped>
</style>
