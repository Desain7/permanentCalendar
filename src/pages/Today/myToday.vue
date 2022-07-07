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
// import {ref} from 'vue'
import mySearch from '../../components/informSearch.vue'


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