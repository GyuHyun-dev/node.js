let names = ["Hong", "Kang", "Adward", "Lee"];
// sort() 오름차순으로 정렬
names.sort();
console.log(names);
// reverse() 내림차순 정렬
names.reverse();
console.log(names);
// 숫자
let nums = [40, 100, 1, 5, 25, 10];
nums.sort();
console.log(nums);
// 화살표함수로
nums.sort((a,b) => {
    return a-b;
});
console.log(nums);


