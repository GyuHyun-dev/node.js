// maxin(믹스인) 믹스인 내부에 함수는 무조건 $로 시작

export default {
    methods : {
        $dateFormat(value, format){
            let today = new Date(value);
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth() +1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);

            let result = format
            .replace('yyyy', year)
            .replace('MM', month)
            .replace('dd', day);
            return result;
        }
    },
    created() {
        console.log('컴포넌트 생성');
    },
    mounted() {
        console.log('DOM에 마운트');
    }
}