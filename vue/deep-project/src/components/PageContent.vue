<template>
  <table>
    <tr>
    {{$dateFormat('2023/12/05', 'yyyy-MM-dd')}}
</tr>
    <tr>
        <th>제목</th>
        <td>{{ title }}</td>
        <th>조회수</th>
        <td>{{ readInfo }}</td>
    </tr>
      <tr>
        <th>작성자</th>
        <td>{{ writer }}</td>
        <th>작성일자</th>
        <td>{{ regdate }}</td>
    </tr>
      <tr>
        <th>내용</th>
        <td>{{ content }}</td>
    </tr>
    <tr>
        <button @click="updateInfo">업데이트</button>
    </tr>
  </table>
</template>

<script>
import AppMixin from '../mixin.js'

export default {
    //props : ['title', 'count', 'writer', 'regdate', 'content']   // 부모 component의 info의 필드들 꼭 있어야 객체타입으로 통으로 들고올 수 있음! PageContent 에 있음
    mixins : [AppMixin],
    props : {
        title : String,
        count : {
            type : Number,
            default : 0
        },
        writer : {
            type : [String, Object],
            default : function(){  
                return {first : 'Adward', second : 'Ian'}
            }
        },
        regdate : {
            required : true,  // 요구하는 것
            validator : function(value){   // 내가 원하는걸 만족하는지 처리하는 것 (만족할만한 조건 줘야함)
                // yyyy-MM-dd
                let format = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/
                return (!value.match(format) == 0);
            }
        },
        content : String
    },
    computed : {
        readInfo() {
            return this.count + 1;
        }
    },
    methods : {
        updateInfo() {
            // 이벤트 전달
            this.$emit('update-info', this.readInfo);  // emit 이벤트와 데이터를 함께 넘김 부모한테
        }
    },
    watch : {
        readInfo(){
        // 데이터 전달
        this.$emit('update-info', this.readInfo);
        }
    }
}
</script>

<style>

</style>