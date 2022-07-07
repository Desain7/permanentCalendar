<template>
    <Search v-model="value" :placeholder="holderText" />
</template>

<script setup>
import {ref} from 'vue'
import { Search } from 'vant'
const holderText = ref('今天')
const value = ref('');

</script>

<style lang="sass">
    
</style>