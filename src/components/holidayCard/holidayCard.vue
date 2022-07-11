<template>
    <div>
        <div class="cardContainer" v-for="(item, index) in props.holiday" :key="index">
            <div class="card"  :class="item.name">
                <div class="content">
                    <div class="name">
                        {{ item.name}}
                    </div>
                    <div class="date">
                        {{ item.festival || item.startday}}
                    </div>
                </div>
                <div class="append" v-if="item.desc">
                    <div class="appendText">
                        假期描述:{{ item.desc }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps} from 'vue'
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
        background-size: cover;
        // background-size: cover;

        .content {
            margin: auto;
            color: rgb(84,174,255);
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
            background-color: aliceblue;
            display: flex;
            .appendText{
                margin: auto;
            }
        }
    }
    .除夕{
        background-image: url('./imgs/除夕.webp');
    }
    .春节{
        background-image: url('./imgs/春节.webp');
    }
    .端午节{
        background-image: url('./imgs/端午节.webp');
    }
    .国庆节{
        background-image: url('./imgs/国庆节.webp');
    }
    .劳动节{
        background-image: url('./imgs/劳动节.webp');
    }
    .清明节{
        background-image: url('./imgs/清明节.webp');
    }
    .元旦节{
        background-image: url('./imgs/元旦节.webp');
    }
    .中秋节{
        background-image: url('./imgs/中秋节.webp');
    }
}
</style>