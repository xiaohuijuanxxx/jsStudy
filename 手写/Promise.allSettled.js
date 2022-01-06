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

//永远是fulfilled状态，都对进入到then的第一个回调函数 res是个数组
/**
 * [{status:'fulfilled',value:'111'},{status:'rejected',value:'222'},{status:'fulfilled',value:'333'}]
 */
// let pall = Promise.allSettled([p1,p2,p3])
// pall.then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

Promise.myallSettled = function(promises){
    return new Promise((resolve, reject)=>{
        let count = 0;
        let result = [];

        if(promises.length === 0){
           return resolve([])
        }

        promises.forEach((item, index)=>{
            Promise.resolve(item).then(res=>{
                count++;
                result[index] = {
                    status: 'fulfilled',
                    value: res
                };
                if(count === promises.length){
                    resolve(result)
                }
            }).catch(err=>{
                count++;
                result[index] = {
                    status: 'rejected',
                    reason: err
                };
                if(count === promises.length){
                    resolve(result)
                }
            })
        })
    })
}

let pall = Promise.myallSettled([p1,p2,p3])
pall.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})