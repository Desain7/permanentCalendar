<template>
    <div class="cardContainer">
        <div class="card">
            <div class="content">
                <div class="name">
                    中秋节
                </div>
                <div class="date">
                    2020年10月1日
                </div>
            </div>
        </div>
    </div>
    <div class="cardContainer">
        <div class="card">
            <div class="content">
                <div class="name">
                    中秋节
                </div>
                <div class="date">
                    2020年10月1日
                </div>
            </div>
        </div>
    </div>
    <div class="cardContainer">
        <div class="card">
            <div class="content">
                <div class="name">
                    中秋节
                </div>
                <div class="date">
                    2020年10月1日
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import {ref} from 'vue'


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
        // background-image: url('./imgs/bg2.jpg');
        // background-size: cover;

        .content {
            margin: auto;

            .name {
                font-size: 2.5rem;
            }

            .date {
                font-size: 1.5rem;
            }
        }
    }

}
</style>