import {a} from './module1.js';

export function b(m){
    return n != 0 && a(m-1);
}


exports.done = false;

var module1 = require('./module1.js');
console.log('在module2.js中，module1.done ='+module1.done);

exports.done = true;
console.log('module2.js执行完毕！')
