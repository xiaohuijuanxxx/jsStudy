/**
 * 箭头函数
1.箭头函数没有arguments
2.箭头函数没有prototype原型, 不能用做构造函数(不能new)
3.箭头函数的this指向箭头函数声明时所在作用域的this指向
4.典型的例子就是setTimeout
 */

let a = 1;
let arrow = ()=>{
    console.log(this); //{}
    console.log(this.a); //undefined
}
arrow()

let obj = {
    a:1,
    fn: function(){
        // setTimeout(()=>{console.log(this.a)},1000) //1 
        setTimeout(function(){
            console.log(this.a)
        },1000) //undefined
        //setTimeout 后的this 指向window 如果不用箭头函数的话位undefined,而箭头函数的this指向声明时候作用域 obj
    }
}
obj.fn()

let map = new Map()
map.set('a',111)
map.get('a') // 111
map.has('b') //false

let set = new Set();
set.add('c',222);
set.add('d',333);
set.has('c');
set.values('c')

/**
 * 对比着两个方法：
 * 一个给c设置了默认值，一个没有给c设置默认值
 * 设置参数默认值是es6才有的
 * 设置默认值之后，会按照es6的规则执行
 * es6中参数的值不会受arguments影响
 */
function xxx(a,b,c){ //es5
    console.log(arguments[1]);
    console.log(b);
    arguments[1] = 111;
    console.log(arguments[1]);
    console.log(b);
}
xxx(1,2,3)

function xxx(a,b,c = 6){ //es6
    console.log(arguments[1]);
    console.log(b);
    arguments[1] = 111;
    console.log(arguments[1]);
    console.log(b);
}
xxx(1,2,3)

