let p = new Promise((resolve, reject) => {
    //做一些异步操作
  setTimeout(function(){
        var num = Math.ceil(Math.random()*10); //生成1-10的随机数
        if(num<=5){
            resolve(num);
        }
        else{
            reject('数字太大了');
        }
  }, 1000);
});
p.then((data) => {
    console.log('resolved',data);
    // throw '动态已被删除'
    // console.log(aaa);//aaa未定义
    return 'dddd'
}).catch(err=>{
    console.log(err+'1111');
}).then(res=>{
    console.log(res);
})

//try Promise.all方法
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

//try Promise.race方法
//请求某个图片资源 5秒之内请求成功的就会走resolve(img)进而走then,5秒之后还没拿到，就会走reject()进而走到catch
function requestImg(){
    var p = new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function(){
            resolve(img);
        }
        img.src = '图片的路径';
    });
    return p;
}
//延时函数，用于给请求计时
function timeout(){
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}
Promise.race([requestImg(), timeout()]).then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log(err);
});