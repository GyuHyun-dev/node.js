<template>
    <div>
        <h1>{{title + '!!!'}}</h1> <!-- {{값}} 일시적으로 자바스크립트 형태로 됨 -->
        <h2 v-bind:name="'sample'" v-text="title"/>
        <p v-html="tagList"/>  <!-- 태그를 인식 시키려면 html 써야됨 -->
        <p v-text="tagList"/>  <!-- 태그를 인식 못하고 그대로 출력 -->
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel }}</p>
        <input type="number" v-model.lazy="numberModel">
        <p>{{ numberModel + 10000  }}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel"/>
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{ chData }}</p>
        <div>
            <input type="checkbox" value="하양" v-model="city">하양
            <input type="checkbox" value="대구" v-model="city">대구
            <p>{{ city }}</p>
        </div>
    </div>
</template>
<script>
    export default {    // 내보낼 정보 정의 / component가 가질 속성 넣기
        data() {
            return {
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ...</strong>',
                valueModel : 'Korea',
                numberModel : '0',
                selectModel : 'winter',
                textModel : "텍스트어레아",
                chData : '',
                city : []
            }
        }
    }
</script>
