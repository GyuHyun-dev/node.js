//공용으로 사용할 함수들 정의

export default {
    methods : {
        $dateFormat(value, format){       //다른곳에 있는 다른 함수들과 충돌을 방지 하기 위해 $를 붙인다
            let date = value == '' ? new Date() : new Date(value);
            let year = date.getFullYear();
            let month = ('0'+(date.getMonth()+1)).slice(-2);
            let day = ('0'+date.getDate()).slice(-2);

            let result = format.replace('yyyy', year)
                                .replace('MM',month)
                                .replace('dd', day)
            return result;
        }
    },
    created(){
        console.log('컴포넌트 생성');
    },
    mounted(){
        console.log('DOM에 마운트')
    }
};