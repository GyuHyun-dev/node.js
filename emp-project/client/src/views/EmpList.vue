<template>
    <div class="container">
      <table class="table">
        <caption>Total : {{ count }}</caption>
        <thead>
          <tr>
            <th>사원번호</th>
            <th>사원이름</th>
            <th>성별</th>
            <th>입사일</th>
            <th>급여</th>
            <th>부서번호</th>
            <th>부서명</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="idx" v-for="(emp, idx) in empList" @click="goToEmpInfo(emp.emp_no)">
            <td>{{ emp.emp_no }}</td>
            <td>{{ emp.first_name }}-{{ emp.last_name }} </td>
            <td>{{ emp.gender }}</td>
            <td>{{ $dateFormat(emp.hire_date, 'yyyy-MM-dd')}}</td>
            <td>{{ emp.salary }}</td>
            <td>{{ emp.dept_no }}</td>
            <td>{{ emp.dept_name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  import axios from 'axios';

export default {
  data(){
    return {
      empList : []
    }
  },
  computed : {
    count() {
      return this.empList.length;
    }
  },
  created(){
    this.getEmpList();
  },
  methods : {
    async getEmpList(){
      let result = await axios.get('/api/employees') //http://localhost:3000/api/users  프록시 측에서 /로 경로 재설정함(pathRewirte) vue.config.js
                        .catch(err => {
                          console.log(err);
                        });
      let list = result.data;
      this.empList = list;
    },
    goToEmpInfo(emp_no) {
      console.log(emp_no);
      this.$router.push({path : 'empInfo', query : {emp_no : emp_no}});
    }
}
}
  </script>
  