<template>
    <div class="container">
        <form @submit.prevent >

            <label for="no">No.</label>
            <input type="text" id="no" v-model="boardInfo.no" readonly>  <!-- 번호는 건들일 일이없어서 readonly -->

            <label for="title">제목</label>
            <input type="text" id="title"  v-model="boardInfo.title">

            <label for="writer">작성자</label>
            <input type="text" id="writer" v-model="boardInfo.writer">    

            <label for="content">내용</label>
            <textarea id="content" style="height:200px" v-model="boardInfo.content"></textarea>

            <label for="regdate">작성일자</label>
            <input type="text" id="regdate" v-model="boardInfo.created_date" >

            <button type="button" class="btn btn-xs btn-info" @click="isUpdated? boardUpdate() : boardInsert()">저장</button>

        </form>
    </div>
</template>
<script>
import axios from 'axios';
import { toHandlers } from 'vue';


export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {
                no : '',
                title : '',
                writer : '',
                content : '',
                created_date : ''
            },
            isUpdated : false
        };
    },
    created() {
        this.searchNo = this.$route.query.boardNo;
        if(this.searchNo > 0) {
            // 수정
            this.getBoardInfo();
            this.isUpdated = true;
        }else {
            // 등록
            // 작성일자에 자동으로 출력되는 현재 날짜
            this.boardInfo.created_date = this.getToday();
        }

        
    },
    methods: {
        async getBoardInfo() {
            // 받아올때 까지 기다림 (await)  axios는 어떤 기능을 수행해달라 요청
            let result = await axios.get(`/api/boards/${this.searchNo}`)
                                    .catch(err => console.log(err));
            this.boardInfo = result.data;
            // 설정 잘해줘야함 dateFormat를 새로 덮는 방식
            this.boardInfo.created_date = 
            this.$dateFormat(this.boardInfo.created_date);
           
        },
        getToday(){
            return this.$dateFormat('');
        },
        async boardInsert() {
            let obj = {
                param : {
                    title : this.boardInfo.title,
                    writer : this.boardInfo.writer,
                    content : this.boardInfo.content,
                    created_date : this.boardInfo.created_date
                }
            }

            let result = await axios.post("/api/boards", obj)  // 두번째가 넘긴 데이터 자동으로 들어감
                                    .catch(err => console.log(err));

            if(result.data.insertId > 0) {
                alert('등록되었습니다.');
                this.boardInfo.no = result.data.insertId;
            }
        },
        async boardUpdate() {
      let obj = {
        param: {
          title: this.boardInfo.title,
          writer: this.boardInfo.writer,
          content: this.boardInfo.content,
          created_date: this.boardInfo.created_date,
        },
      };
      let result = await axios.put(`/api/boards/${this.boardInfo.no}`, obj)
                               .catch((err) => console.log(err));
      if (result.data.changedRows > 0) {
        alert('수정되었습니다.');
      }
    },
    }
}
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type=button] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type=button]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>