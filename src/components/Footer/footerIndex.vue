<template>
    <Tabbar route v-model="active" active-color="#ee0a24" inactive-color="#000" >
        <TabbarItem icon="underway-o" to="/Today">当天</TabbarItem>
        <TabbarItem icon="calendar-o" to="/Recent">近期</TabbarItem>
        <TabbarItem icon="clock-o" to="/ThisYear">当年</TabbarItem>
    </Tabbar>
</template>

<script setup>

import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue';
const active = ref(0);
</script>

<style lang="sass" scoped>


</style>
