<template>
    <van-sticky offset-top="2.8rem">
        <Search v-model="value" :placeholder="holderText" />
    </van-sticky>

</template>

<script setup>
import { ref } from 'vue'
import { Search } from 'vant'
const holderText = ref('今天')
const value = ref('');

</script>

<style lang="scss" scoped>
</style>