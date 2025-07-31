console.log("hi");
let a = 15
let b = 20;
// let temp=a
// a=b
// b=temp
// console.log(a , b);
// 邏輯運算
// == 等於 != 不等於 === 全等!== 不全等 > 大於 < 小於 >= 大於等於 <= 小於等於 && 並且 || 或者 ! 非
// 以上運算符號都會回傳布林值 true 或 false

// let a = 10;
// let b = 20;
// console.log(a==10)
// console.log(a!=10)
// console.log(a==10 && b==20)
// console.log(a==10 || b==10)
// console.log(a<=10 && b>=20)
// 算術運算子
// console.log(1+2)
// console.log(1-2)
// console.log(1*2)// 乘法
// console.log(1/2)// 除法
// console.log(5**2) // 5的2次方
// console.log(5%2) // 取餘數

//if else 條件判斷
// if(a==10){
//   console.log("a等於10")
// }else if(a==20){
//   console.log("a等於20")
// }else{
//     console.log("a不等於10和20")
// }

// for (let i = 0; i < 10; i++) {
// console.log(i)
// }
// console.log("迴圈結束");

// let double = function(num1,num2) {
//     // num = num || 1; // 如果 num 沒有傳入值，則預設為 1
//   return num1* 2;
// }
// let c= double(2,3)//4
// console.log(c);

// let saymyname = function(name) {
//     console.log("my name is wi " + name);
//     saymyname("wi");
// }
let sum=0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum);