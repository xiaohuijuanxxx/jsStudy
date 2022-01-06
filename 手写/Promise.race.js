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

// let prace = Promise.race([p1,p2,p3])
// prace.then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

Promise.myrace = function(promises){
    return new Promise((resolve, reject)=>{
        promises.forEach(item=>{
            Promise.resolve(item).then(res=>{resolve(res)})
            .catch(err=>{reject(err)})
        })
    })
}

let prace1 = Promise.race([p1,p2,p3])
prace1.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})