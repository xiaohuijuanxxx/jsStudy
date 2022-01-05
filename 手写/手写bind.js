//call
Function.prototype.mycall = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}
//apply
Function.prototype.myapply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
//bind
/**
 * 改变this指向
 * 返回一个函数
 * 参数可以分批次传入
 * bind生成的函数可作为构造函数 ***
 */
Function.prototype.mybind = function(context){
    let self = this;
    let arg = [...arguments].slice(1);
    // return function(){
    //     let arg2 = Array.prototype.slice.call(arguments)
    //     self.apply(context,arg.concat(arg2));
    // }
    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
        self.apply(this instanceof self ? this : context, arg.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值

    const f = function(){}
    f.prototype = this.prototype;
    fbound.prototype = new f();
    return fbound;
}

function say(sex,age){
    console.log('my name is '+ this.name + '性别：'+sex+'年龄：'+age)
}

const obj = {
    name:'xxx'
}

//可以分批传入
let mid = say.bind(obj,'男')
mid('18')

let mid1 = say.mybind(obj,'女')
mid1('20')