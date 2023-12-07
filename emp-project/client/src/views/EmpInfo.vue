<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">사원번호</th>
                    <td class="text-center">{{empInfo.emp_no}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">사원이름</th>
                    <td class="text-center">{{empInfo.first_name}}-{{ empInfo.last_name }}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">{{ empInfo.gender }}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">입사일</th>
                    <td class="text-center">{{ $dateFormat(empInfo.hire_date, 'yyyy-MM-dd')}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">급여</th>
                    <td class="text-center">{{empInfo.salary}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">부서번호</th>
                    <td class="text-center">{{empInfo.dept_no}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">부서명</th>
                    <td class="text-center">{{empInfo.dept_name}}</td>
                </tr>
            </table>
        </div>
        <div class="row">
             <button class="btn btn-info" v-on:click="goToEmpUpdate(empInfo.emp_no)">수정</button>
            <router-link to="/empList" class="btn btn-success">목록</router-link>
            <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">삭제</button>
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
   computed : {
    Gender() {
        return this.empInfo.gender == 'M' ? '남' : '여'
    }
   },
   created() {
    this.searchNo = this.$route.query.emp_no;   // 페이지요청은 router  페이지가 열릴때는 route
    this.getEmpInfo();
   },
   methods : {
    // 리스트
    async getEmpInfo() {
        let result = await axios.get(`/api/employees/${this.searchNo}`) 
                                .catch(err => console.log(err));
        this.empInfo = result.data;    // .data 데이터가 보내준 값을 받음
    },
    async deleteInfo(emp_no){
    let data = {
        param : {
            to_date : '1994-01-01'
        }
    }
        let result = await axios.delete(`/api/employees/${emp_no}`, {data : data})
                                .catch(err => console.log(err));
        console.log(result.data);
        let count = result.data.affectedRows;
        if(count == 0){
            alert('정상적으로 삭제되지 않았습니다.');
        } else {
            alert('정상적으로 삭제되었습니다.');
            this.$router.push({name:'empList'});
        }
    },
    goToEmpUpdate(emp_no){
                this.$router.push({path : '/empUpdate', query:{emp_no : emp_no}})
            }
},


    

   }

    
        
</script>