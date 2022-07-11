<template>
    <ul class="main">
        <li v-for="(item, index) in memoArray" :key="index">
            <div class="list" @click="changeMemo(item.id)">
                <div class="text">
                    <h4>{{ item.memoTitle }}</h4>
                    <p>上次更新&nbsp;{{ formatTime(item.updatedTime) }}</p>
                </div>
                <div class="content">
                    <span>{{ item.memoContent }}</span>
                </div>
            </div>
        </li>
    </ul>
    <div class="add-btn" @click="add">
        <span>+</span>
    </div>
    <Popup :show="show" position="bottom" :style="{ height: '40%' }" :round="true" @close="saveMemo">
        <Icon name="cross" size="2rem" @click="deleteMemo(temId)" />
        <CellGroup inset>
            <Field v-model="memoTitle" rows="1" autosize label="标题" type="textarea" maxlength="10" placeholder="请输入标题"
                show-word-limit />
            <Field v-model="memoContent" rows="3" autosize label="内容" type="textarea" maxlength="100"
                placeholder="请输入内容" show-word-limit />
        </CellGroup>
    </Popup>


</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Field, CellGroup, Popup, Toast, Icon, Dialog } from 'vant'
import { useStore } from 'vuex'
const store = useStore()

let show = ref(false)
function add() {
    show.value = true
    change = false
}
function changeMemo(id) {
    show.value = true
    memoTitle.value = memoArray.value[id].memoTitle
    memoContent.value = memoArray.value[id].memoContent
    temId.value = id
    change = true
}
function deleteMemo(id) {
    Dialog.confirm({
        title: '提示',
        message:
            '确认删除?',
    }).then(() => {
        store.dispatch('deleteMemo', id)
        memoTitle.value = ''
        memoContent.value = ''
        show.value = false
    }).catch(() => {
        show.value = false
    });

}

const memoArray = computed(() => store.state.memo.memo.memoContent);
const sum = computed(() => store.state.memo.memo.memoSum);
let memoTitle = ref('')
let memoContent = ref('')
let id = ref(sum.value)
let temId = ref(0)
let change = false
function saveMemo() {
    if (memoTitle.value && memoContent.value && !change) {
        store.dispatch('commitMemo', {
            memoTitle: memoTitle.value,
            memoContent: memoContent.value,
            updatedTime: Date.now(),
            id: id.value++
        })
        Toast('保存成功!')
    }
    if (memoTitle.value && memoContent.value && change) {
        store.dispatch('changeMemo', {
            memoTitle: memoTitle.value,
            memoContent: memoContent.value,
            updatedTime: Date.now(),
            id: temId.value
        })
        Toast('保存成功!')
    }
    memoTitle.value = ''
    memoContent.value = ''
    show.value = false
}



function formatTime(value) {
    if (value) {
        let date = new Date(value)	// 时间戳为秒：10位数
        let year = date.getFullYear()
        let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    } else {
        return ''
    }
}

onMounted(() => {
    getMemo()
})
function getMemo() {
    if (localStorage.getItem(`memo`)) {
        let inform = localStorage.getItem(`memo`); // 从缓存中拿到数据给程序使用
        store.state.memo.memo = JSON.parse(inform);
    }

}

</script>

<style  lang="scss" scoped>
.main {
    margin-top: 20%;
    padding: 0 1rem 0 1rem;

    li {
        display: flex;
        width: 100%;

        .list {
            padding: 1rem;
            background: white;
            border-radius: 1rem;
            margin: 0 0 2rem 0;
            width: 90%;
            text-align: left;
            flex-direction: row;

            .text {
                display: inline-block;

                h4 {
                    margin: 0 0 0.5rem 0;
                    font-size: 2rem;
                    color: #323233d9;
                    font-weight: bold;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 100%;
                }

                p {
                    font-size: 1rem;
                    color: #666;
                }
            }

            .content {
                overflow: hidden;
                text-overflow: ellipsis;

                span {}
            }



        }
    }
}

.add-btn {
    position: fixed;
    right: 5%;
    bottom: 10%;

    span {
        font-size: 3rem;
        font-weight: 100;
        display: inline-block;
        width: 3rem;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        border: 0.1rem solid #f2f3f5;
        border-radius: 100%;
        background: white;
        box-shadow: -0.1rem -0.1rem 0.1rem #fff, 0.1rem 0.1rem 0.1rem #777;
        color: #666;

        &:hover {
            box-shadow: -0.1rem -0.1rem 0.1rem #777, 0.1rem 0.1rem 0.1rem #fff
        }
    }
}

.van-cell-group {

    .van-cell {
        z-index: 999;
    }
}
</style>