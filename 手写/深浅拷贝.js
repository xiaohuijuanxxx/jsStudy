/**
 * 深浅拷贝：都是针对于引用数据类型 对于基本数据类型来说没有深浅的区别
 浅拷贝：对象引用拷贝
 深拷贝：对象值的拷贝
 */

//  浅拷贝的实现方式：
//  1.赋值语句 = 对于引用数据类型来说就是浅拷贝
//  2.Object.assign(目标对象，源对象1，源对象2，...)
//  3.扩展运算符...  obj2 = {...obj1} arr2 = [...arr1]
//  4.concat  arr1 = arr.concat()
//  5.slice arr1 = arr.slice()

//  深拷贝的实现方式：
//  手写递归
//  JSON.parse(JSON.stringfy(obj))
//  

let arr = [1, 3, {
    username: ' kobe'
},function(){}];
let arr4 = JSON.parse(JSON.stringify(arr));
arr4[2].username = 'duncan'; 
//函数会变为null
console.log(arr, arr4)

//手写递归 第一版
function deepClone(source){
    if(typeof source !== 'object') return source;
    //或者用 source instanceof Array
    //或者用 Object.prototype.toString.call(source) "[object Object]"
    let target = Array.isArray(source) ? [] : {};
    for(let index in source){
        //hasOwnProperty 查看对象自身是否有某个属性 过滤原型上自带的属性
        if(Object.prototype.hasOwnProperty.call(source, index)){
            target[index] = typeof source[index] === 'object' ? deepClone(source[index]) : source[index]
        }
    }
    return target
}

//第二版 运用尾递归解决报栈问题 return 一个函数
//还在学习中。。。。。

//第三版：可能会数据循环引用
let data =  {
    a:1,
}
data.b = data;
let data1 = deepClone(data)
// 就会爆栈，递归进入死循环导致栈内存溢出了 
// 解决办法用map 或者weakmap
function deepclone3(source){
    function clone(source,map){
        if(typeof source !== 'object') return source;
        if(map[source]){
            return map[target]
        }
        let result = Array.isArray(source) ? [] : {};
        for(let i in source){
            if(Object.prototype.hasOwnProperty.call(source,i)){
                result[i] = typeof source[i] === 'object' ? clone(source[i],map) : source[i]
            }
        }
        return result;
    }
    let map = new Map();
    // let map = new WeakMap();
    const target = clone(source,map);
    map.clear(); //weakmap 弱引用的时候不需要这句
    map = null;
    return result
}





// Object.prototype.hasOwnProperty.call(source,key)

/**
 * 栈内存存储的是局部变量，凡是定义在方法中的都是局部变量，栈里存放的都是单个变量，变量被释放了，就没有。
堆内存存储的是数组和对象，凡是new建立的都在堆中，堆中存放的都是实体，实体用于封装数据，而且是封装多个，如果一个数据消失，这个实体也没有消失，还可以用，所以堆是不会随时释放的。
 */
// 手写递归 当层级过多的时候容易引起报栈，更好的办法是用循环代替递归

//模拟爆栈
/**
 * deep: 深度
 * breath: 广度
 */
function createData(deep, breath){
    let data = {};
    let temp = data;
    for(let i=0;i<deep;i++){
        temp = temp[`data${i}`] = {};
        for(let j=0;j<breath;j++){
            temp[j] = j
        }
    }
    return data;
}

deepClone(createData(10000)) //会爆栈
