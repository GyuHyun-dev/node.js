// 어지간하면 손대지 말자! 얘를 시작점으로 vue를 만드는 것(vue 생성)

import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'
import store from './store.js'

createApp(App)
.use(store)
.mixin(mixin)
.directive('focus', {
    mounted(el, binding, vnode, prevVNode) {
        console.log('mounted', el, binding, vnode, prevVNode);
        if(binding.value) {
            el.focus();
        }
    },
    updated(el, binding, vnode, prevVNode) {
        console.log('mounted', el, binding, vnode, prevVNode);
        if(binding.value) {
            el.style.color='red';
        } else {
            el.style.color='black';
        }
    }
})
.mount('#app') // index.html 에서 연결
