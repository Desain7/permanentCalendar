<template>
    <van-config-provider :theme-vars="themeVars">
        <NavBar :title="thisTitle">
            <template #left>
                <van-icon name="smile-o"  size="2rem" color="#fff"/>
            </template>
            <template #right>
                <van-icon name="add-o"  size="2rem" color="#fff"/>
            </template>
        </NavBar>
    </van-config-provider>

</template>

<script setup>
import { ref } from 'vue'
import { NavBar } from 'vant';
let thisTitle = ref('当天信息');
const themeVars = {
    navBarBackgroundColor: 'rgb(238,65,64)',
    navBarTitleTextColor: '#fff'
};

</script>


<style lang="sass" scoped>


</style>
