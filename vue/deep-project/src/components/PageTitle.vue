<template>
  <h2>{{title}}</h2>
</template>

<script>
export default {
    props : ['title']   // 유효성 검사 없이 정해진 이름으로 넘어온 데이터 그대로 받는다 (부모 -> 자식)

}
</script>

<style>

</style>