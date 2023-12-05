<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFoucsed"/>
    <component v-bind:is="selected"></component>   
  </div>
</template>

<script>
import PropsCom from './components/PropsComponents.vue' // 부모 components
import SlotCom from './components/TextModal.vue'
import Composition from './components/CompositionInterface.vue'
import StoreCom from './components/StoreComponent.vue'

export default {
  name : 'app',
  data() {
    return {
      selected : 'PropsCom',  // PropsCom 을 밑에 components 에서 찾아서 템플릿 components로 위치함
      isFoucsed : false
    };
  },
  components : {
    PropsCom,  // selected PropsCom이 요기
    SlotCom,
    Composition,
    StoreCom
  },
};
</script>

<style>

</style>