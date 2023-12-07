<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">사원번호</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.emp_no" readonly/>
                    </td>                      
                </tr>
                 <tr>
                    <th class="text-right table-primary">성</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.first_name" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.last_name" />
                    </td>                      
                </tr>
                <tr>
               <th class="text-right table-primary">성별</th>
               <td class="text-center">
                  <input type="radio" v-model="empInfo.gender" value="M" onclick="return false;" />남자
                  <input type="radio" v-model="empInfo.gender" value="F" onclick="return false;" />여자
               </td>
            </tr>
                 <tr>
                    <th class="text-right table-primary">입사일</th>
                    <td class="text-center">
                         <input type="date" v-model="empInfo.hire_date">
                    </td>
                   
                </tr>
                <tr>
                    <th class="text-right table-primary">급여</th>
                    <td class="text-center">
                        <input type="number" v-model="empInfo.salary">
                    </td>
                    
                </tr> 
                 <tr>
                    <th class="text-right table-primary">부서번호</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.dept_no">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">부서명</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.dept_name">
                    </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="updateInfo">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
        searchNo : '',   // router가 받을 프로퍼티 값
        empInfo : {}
    }
   },
   created() {
        this.searchNo = this.$route.query.emp_no;
        this.getEmpInfo();
    },
    methods : {
    // 리스트
    async getEmpInfo() {
        let result = await axios.get(`/api/employees/${this.searchNo}`)
                                .catch(err => console.log(err));
        this.empInfo = result.data;    // .data 데이터가 보내준 값을 받음
    },
    async updateInfo(){
    if(!this.Validation()) return;

            let data = {
                param : {
                    first_name : this.empInfo.first_name,
                    last_name : this.empInfo.last_name
                }
            };
            // json 방식
            let result = await axios   // 보낼 정보 경로와 데이터
               .put(`/api/employees/${this.empInfo.emp_no}`, data)
               .catch((err) => console.log(err));
            
            // result = await axios.post('/api/users', data); 2가지 방식 위에꺼랑

            console.log(result.data);
            if(result.data.changedRows == 0){
                alert(`수정되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
            } else {
                alert(`정상적으로 수정 되었습니다.`);
            } 
        },
        Validation() {
            if(this.empInfo.emp_no == ''){
                alert('사원번호가 입력되지 않았습니다.');
                return false;
            }

            if(this.empInfo.first_name == ''){
                alert('이름이 입력되지 않았습니다.');
                return false;
            } 

            return true;
        }
     },
}
</script>