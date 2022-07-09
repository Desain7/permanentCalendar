<template>
    <div>
        <div class="cardContainer" v-for="(item, index) in props.holiday.holiday_array" :key="index">
            <div class="card">
                <div class="content">
                    <div class="name">
                        {{ item.name }}
                    </div>
                    <div class="date">
                        {{ item.festival }}
                    </div>
                </div>
                <div class="append">
                    <div class="appendText">
                        假期描述:{{ item.desc }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    holiday: Object
})
</script>

<style lang="scss" scoped>
.cardContainer {
    margin-top: 15%;
    margin-bottom: 15%;
    height: 15rem;
    display: flex;

    .card {
        background-color: aliceblue;
        margin: auto;
        width: 90%;
        height: 100%;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        box-shadow:0.5rem 0.5rem 0.8rem#aaa;
        // background-image: url('./imgs/bg2.jpg');
        // background-size: cover;

        .content {
            margin: auto;

            .name {
                font-size: 2.5rem;
            }

            .date {
                margin-top: 25%;
                font-size: 1.5rem;
            }
        }

        .append {
            height: 25%;
            border-radius:  0 0 2rem 2rem;
            background-color: aqua;
            display: flex;
            .appendText{
                margin: auto;
            }
        }
    }

}
</style>