let arr = [
    {id:1,name:'xx1',age:'18',hobbies:['吃饭','睡觉','编程']},
    {id:1,name:'xx2',age:'18',hobbies:['吃饭','睡觉','编程']},
    {id:2,name:'xxx',age:'18',hobbies:['吃饭','睡觉','编程']},
    {id:2,name:'xxx',age:'18',hobbies:['吃饭','睡觉','编程']},
    {id:1,name:'xx1',age:'18',hobbies:['吃饭','睡觉','遛狗']}
]

//方法一：filter+map 
// 对象去重的思想就是根据主键去重
// filter方法创建一个新数组！！！ item数组！！！ 
function onRepeatobj(arr, key){
    const res = new Map()
    return arr.filter((item)=>{
        return !res.get(item[key]) && res.set(item[key],100)  
    })
}
console.log(onRepeatobj(arr,'id'));

//方法二：reduce + map
function onRepeatobj1(arr,key){
    let res = new Map()
    return arr.reduce((pre,cur)=>{
        if(!res.get(cur[key])){
            res.set(cur[key],1);
            pre = pre.concat(cur)
        }
        return pre
    },[])
}
console.log(onRepeatobj1(arr,'id'));

//方法三：for循环 forEach等
function onRepeatobj2(arr,key){
    console.time();
    let res = new Map();
    let result = [];
    arr.forEach(item => {
        if(!res.get(item[key])){
            res.set(item[key],100);
            result.push(item)
        }
    });
    console.timeEnd();
    return result
}
console.log(onRepeatobj2(arr,'id'));