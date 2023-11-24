// fetch 랑 같음

const promise = new Promise((resolve, reject) => {
    if(true) {
        // 처리성공
        resolve("결과 데이터");
    } else {
        // 처리실패
        reject(new Error("에러 메세지"));
    }
});

promise
.then((success, fail) => {

})
.catch(error => {
    
})
.finally(() => {
    // 처리결과와 무관하게 항상 실행해야하는 코드
})