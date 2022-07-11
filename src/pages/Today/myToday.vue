<template>
    <mySearch default="daily" />
    <div class="todayCardContainer">
        <div class="todayCard">
            <div class="cardHead">
                <div class="headText">
                    {{ todayInform.weekday }}
                </div>
            </div>
            <div class="mainCard">
                <div class="date">
                    {{ todayInform.lunar }}
                </div>
                <div class="today">
                    {{ inform.today }}
                </div>
            </div>
        </div>
    </div>
    <div class="informCardContainer">
        <div class="informCard">
            <div class="cardText">
                <div class="title">
                    当前年月
                </div>
                <div class="content">
                    {{ inform.yearMonth }}
                </div>
            </div>
        </div>
    </div>
    <div class="informCardContainer">
        <div class="informCard">
            <div class="cardText">
                <div class="title">
                    今年属相
                </div>
                <div class="content">
                    {{ todayInform.animalsYear }}
                </div>
            </div>

        </div>
    </div>
    <div class="informCardContainer">
        <div class="informCard">
            <div class="cardText">
                <div class="title">
                    农历年份
                </div>
                <div class="content">
                    {{ todayInform.lunarYear }}
                </div>
            </div>

        </div>
    </div>
    <div class="informCardContainer">
        <div class="informCard">
            <div class="cardText">
                <div class="title">
                    适宜事件
                </div>
                <div class="content">
                    {{ todayInform.suit }}
                </div>
            </div>

        </div>
    </div>
    <div class="informCardContainer">
        <div class="informCard">
            <div class="cardText">
                <div class="title">
                    避免事件
                </div>
                <div class="content">
                    {{ todayInform.avoid }}
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
import { reactive, onMounted, computed, nextTick, onBeforeUpdate } from 'vue'
import { useStore } from 'vuex';
import mySearch from '@/components/informSearch.vue'
const store = useStore()
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

onMounted(() => {
    if (getLocalData('daily')) {
        console.log('get')
    } else {
        store.dispatch('getDailyInform', searchInform)
    }

})
let inform = reactive({})

const todayInform = computed(() => store.state.calendar.dailyInform);
nextTick(() => {
    let tem = todayInform.value.date.split('-')
    inform.today = computed(() => `${tem[0]}年${tem[1]}月${tem[2]}日`)
    inform.yearMonth = computed(() => `${tem[0]}年${tem[1]}月`);
})

onBeforeUpdate(() => {
    let tem = todayInform.value.date.split('-')
    inform.today = computed(() => `${tem[0]}年${tem[1]}月${tem[2]}日`)
    inform.yearMonth = computed(() => `${tem[0]}年${tem[1]}月`);
})

let searchInform = reactive({
    date: '',
    key: 'fe0070fd7472a07b5927cefd98d281eb'
})
if (searchInform.date == '') {
    searchInform.date = year + '-' + month + '-' + day
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

</script>

<style lang="scss" scoped>
$cardHeight: 12rem;
$textColor: aliceblue;

.todayCardContainer {
    margin-top: 15%;
    display: flex;
    width: 100%;
    height: $cardHeight;

    .todayCard {
        margin: auto;
        width: 90%;
        height: 100%;
        background-image: url('./imgs/bg2.jpg');
        background-size: cover;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 0.8rem #aaa;
        text-shadow: 0.1rem 0.1rem black;
        .cardHead {
            width: 100%;
            height: 2rem;
            border-radius: 1rem 1rem 0 0;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;

            .headText {
                margin: auto 0;
                transform: translate(15%);
                font-size: 1rem;
                color: $textColor;
            }
        }

        .mainCard {
            .date {
                color: $textColor;
                font-size: 3rem;
            }

            .today {
                margin-top: 5%;
                color: $textColor;
                font-size: 1.5rem;
            }
        }
    }
}

.informCardContainer {
    margin-top: 5%;
    display: flex;
    width: 100%;
    min-height: 4rem;

    .informCard {
        width: 90%;
        min-height: 100%;
        margin: 0 auto;
        border-radius: 1rem;
        background-color: white;
        display: flex;
        box-shadow: 0.5rem 0.5rem 0.8rem #aaa;

        .cardText {
            width: 100%;
            margin: auto 0;
            display: flex;
            flex-direction: row;

            .title {
                margin: auto 0 auto 5%;
                font-size: 1.2rem;
                color: red;
            }

            .content {
                margin: auto 0 auto 10%;
                width: 13rem;
                font-size: 1rem;
            }
        }

    }

}
</style>