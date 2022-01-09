/**
 * 将使用多个参数的一个函数转换成一系列使用一个参数的函数
 */

function add(a,b){
    console.log(a+b);
    return a+b;
}
add(2,3);

// curry 是改写的函数 每次传一个参数
// curry(add,2)(add,3)

//实现函数柯里化 curry 第一版
function curry(fn){
    // let arg = [].slice.call(arguments,1)
    let arg = [...arguments].slice(1);
    return function(){
        let newArg = arg.concat([...arguments]);
        return fn.apply(this,newArg);
    }
}
// curry(add,1,2)();
let mid = curry(add,2);
mid(6);

//第二版
function curry2(fn,args){
    //拿到函数的形参数
    let length = fn.length;
    // 拿到实参
    let argmid = args || [];
    return function(){
        let newArg = argmid.concat([...arguments]);
        if(newArg.length < length){
            return curry.call(this, fn, newArg)
        }else{
            return curry.apply(this, newArg)
        }
    }

}
