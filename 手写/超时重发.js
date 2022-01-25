/**
 * fn传入请求
 * num最多重传次数
 * time超时时间
 */
async function callRetry(fn, num = 3,time = 1003){
    let start = Date.now()
    try {
        return await fn();//重新请求
    } catch(error) {
        console.log(error);
        console.log('开始重发');
        num--;
        let star = Date.now() - start
        console.log(star,num);
        while(star>time && num<=0){
            throw '重发失败'
        }
        return callRetry(fn,num-1)
    }
}

function myRequest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('成功了');
            reject('失败了');
        },1000)
    }).then(res=>{
        console.log(res);
    })
}
callRetry(myRequest) //失败了
