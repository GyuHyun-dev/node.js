<template>
    <div>
        <!-- 데이터를 받으려면 자식컴포넌트의 title의 값 넣기 -->
        <PageTitle title="Hello, world!"/>
        <!-- 숫자형태면 v-bind 꼭 넣어야함 꼭! 안그럼 문자열로 인식함 --> 
        <!-- <PageContent :title="header"
                            v-bind:count="10"
                            :writer="['Adward']"
                            :regdate="'2023-12-05'"
                            :content="{ first : 'Node.js', second : 'Vue.js'}"/>   -->
        <!-- 한번에 info(객체타입) 에 값 넣어서 걍 들고오기 및 update-info(emit으로 자식한테 받아옴) -->
        <PageContent v-bind="info" @update-info="handler" />
        <RefCom ref="child" />
        <button @click="childHandler">자식 제어</button>
   </div>
</template>

<script>
import PageTitle from './PageTitle.vue'  // 자식 components import
import PageContent from './PageContent.vue'
import RefCom from './RefComponents.vue'

export default {
    data() {
        return {
            header : '',
            info : {
                title : 'Today is',
                count : 10,
                writer : 'Adward',
                regdate : '2023-12-05',
                content : '내용 없음'
            }
        }
    },
    // 자식 components  
    components : {
        PageTitle,     
        PageContent,    
        RefCom
    },
    methods : {
        handler(value){
            alert(value);
        },
    childHandler() {
        // this.$refs.child.content = '부모가 보내는 데이터';  // templat 에 RefCom
        // this.$refs.child.plusCount();
        this.$refs.child.$refs.cBtn.click();
    }
    },
}
</script>

<style>

</style>