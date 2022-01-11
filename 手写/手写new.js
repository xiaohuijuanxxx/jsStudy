/**
 * new 实现
 * 创建一个对象
 * 将构造函数的作用域赋值给这个新对象（将this指向新对象）
 * 执行构造函数中代码 （为这个新对象添加属性和方法）
 * 返回这个新对象（必须是对象）
 */


// 参数是构造函数
function myNew(fn, ...args){
    if(typeof fn !== 'function') throw 'fn 必须是函数';
    // obj.__proto__ = fn.prototype
    let obj = Object.create(fn.rpototype);
    let res = fn.apply(obj, [...args]);
    return typeof res === 'object' || typeof res === 'function' ? res : obj;
}


//记录执行脚本时间
console.time()
let i = 0;
while(true){
    if(i>1000) break;
    i++
}
console.timeEnd()