<template>
    <mySearch />
    <div class="todayCardContainer">
        <div class="todayCard">
            <div class="cardHead">
                <div class="headText">
                    星期一
                </div>
            </div>
            <div class="mainCard">
                <div class="date">
                    九月十七
                </div>
                <div class="today">
                    2020年11月2日
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
                    2020年11月
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
                    鼠
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex';
import mySearch from '../../components/informSearch.vue'
const store = useStore()
let date = new Date();
let year = date.getFullYear();//当前年(4位)
let month = date.getMonth() + 1;//当前月
let day = date.getDate(); //获取当前日(1-31)
date.getDay(); //获取当前星期X(0-6,0代表星期天)

let searchInform = reactive({
    date: '',
    key: 'fe0070fd7472a07b5927cefd98d281eb'
})
if (searchInform.date == '') {
    searchInform.date = year + '-' + month + '-' + day
}

function getLocalData(key) {
    let storageTimestamp = localStorage.getItem(`${key}Timestamp`);
    let expires = 1000 * 3600 * 24; // 有效时间
    let timestamp = Date.now();  // 当前时间
    // 从缓存中取数据（10min内数据）
    if (storageTimestamp && (timestamp - storageTimestamp) < expires) {
        let inform = localStorage.getItem(`${key}Inform`); // 从缓存中拿到数据给程序使用
        store.state.calendar.dailyInform = JSON.parse(inform);
        return true;
    }
    return false;
}


onMounted(() => {
    if(getLocalData('today')) {
        console.log(123)
    } else {
        store.dispatch('getDailyInform', searchInform)
    }
    
})

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
    height: 4rem;

    .informCard {
        width: 90%;
        height: 100%;
        margin: auto;
        border-radius: 1rem;
        background-color: antiquewhite;
        display: flex;

        .cardText {
            width: 100%;
            margin: auto 0;
            display: flex;
            flex-direction: row;

            .title {
                margin: auto 0 auto 5%;
                font-size: 1.5rem;
                color: red;
            }

            .content {
                margin: auto 0 auto 10%;
                font-size: 1rem;
            }
        }

    }

}
</style>