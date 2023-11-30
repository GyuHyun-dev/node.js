<template>
    <div>
        <label><input type="text" v-model="msg"></label>  
        <p>{{ msg }}</p>
    </div>
</template>
<script>
    export default {
        name : 'VeuComponent',  // 컨퍼런트 이름 없어도 되긴함.
        data() {               // 컨퍼런트가 관리하는 데이터
            return {
                msg : '2023-11-30'    // input 이랑 연결되어서 msg에 값을 넣으면 화면에 값이 들어감
            }
        }
    }
</script>
<style scoped> 
    p {
        background-color: burlywood;
    }
</style>