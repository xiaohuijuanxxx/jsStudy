/**
 * js不具备sleep函数
 * sleep不能用setTimeout模拟
 * 因为setTimeOut 是阻塞回调函数里面的代码，并不会阻塞setTimeOut后面的代码
*/

//这里不会1秒后打印settimeout里面的东西，因为sleep之后才会执行，因为sleep是同步任务（相当于阻塞）
// console.log('开始');
// setTimeout(()=>{
//     console.log('我是settimeout延时');
// },1000)
// sleep(10000)
// console.log('结束');

//模拟  开始-结束-等我执行完成
// console.log('开始');
// setTimeout(()=>{ //模拟sleep
//     console.log('等我执行完成');
// },1000)
// console.log('结束');

//想要的结果为开始-等我执行完成-结束   
//sleep() 函数，该函数会导致代码在恢复执行之前等待指定的时间段
/**
 * 会在1秒之后连续打印1,2,3  而不是一秒打印一个
 *  setTimeout(() => console.log(1), 1000)
    setTimeout(() => console.log(2), 1000)
    setTimeout(() => console.log(3), 1000)
 */


//方法一：使用while循环
// function sleep(time){
//     let time1 = new Date().getTime();
//     while(true){
//         let time2 = new Date().getTime();
//         if(time2-time1>=time){
//             break;
//         }
//     }
// }
// console.log('开始');
// sleep(10000)
// console.log('结束');

//方法二 async await + setTimeOut
function sleep1(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('等3秒之后才执行'));
        },time)
    })
}
async function out(){
    console.log('开始');
    await sleep1(3000);
    console.log('结束');
}
out();

// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })
//1 7 6 8 2 4 3 5 9 11 10 12
