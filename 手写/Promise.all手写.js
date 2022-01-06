let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('第一个')
        resolve('111')
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('第二个')
        reject('222')
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('第三个')
        resolve('333')
    },3000)
})

let pall = Promise.all([p1,p2,p3])
pall.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

/**
 * 返回值仍然是一个promise
 * 所有成功才成功
 * 一个失败就失败
 */
Promise.myall = function(promiseList){
    return new Promise((resolve,reject)=>{
        //计数器
        let count = 0;
        //存放结果
        let result = [];
        let len = promiseList.length;

        if(len === 0){
            return resolve([]);
        }

        promiseList.forEach((item, index)=>{
            //注意数组项可能不是promise 需要手动转化一下
            Promise.resolve(item).then(res=>{
                count++;
                //收集每个promise的返回值
                result[index] = res;
                if(count === len){
                    resolve(result);
                }
            }).catch(err=>{
                reject(err)
            })
        })
    })
}

let pall1 = Promise.myall([p1,p2,p3])
pall1.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})