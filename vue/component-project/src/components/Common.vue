<template>
    <div></div>
</template>

<script>
    
    export default{
        components : [],  // 배열로 등록해줘야함
        data(){
            return{
                today : new Date()
            }
        },
        computed : {  // 연산값을 가지고 있음 
            AfterYear(){
                return this.today.setFullYear(this.today.getFullYear() + 1);
            }
        },  
        methods : {},
        watch : {},   // 프로세스 / 내가 해야하는 행동들 정의
        created() {},   
        mouthed() {}
    }
</script>

<style>

</style>
