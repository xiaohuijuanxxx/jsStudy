//不支持return 不能break跳出循环
// throw 才能跳出循环
let arr = [1,2,3,4,5,6,7,8];
// arr.forEach(item=>{
//     if(item>5){
//         // return item
//         // break;
//         // throw "这样才能结束"
//     }
//     console.log(item * item);
// })

//配合 async+await 不起作用 await后面必须跟promise对象
// arr.forEach(async (item,index)=>{
//     await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(arr[index] = item+1)
//             console.log(arr[index]);
//         },1000)
//     })
// })

//解决办法一 用for模拟 每个都执行完回调函数之后在继续执行下一步
async function myforEach(array, callback){
    for(let i = 0; i<array.length; i++){
        await callback(array[i], i, array)
    }
}

// myforEach(arr,async (item,index)=>{
//    await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(arr[index] = item+1)
//             console.log(arr[index]);
//         },1000)
//     })
// })

//解决办法二：改用for of
// entries() 方法返回一个数组的迭代对象
async function test(){
    for(let [item, index] of arr.entries()){
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(arr[index] = item+1)
                console.log(arr[index]);
            },1000)
        })
    }
}
test()

