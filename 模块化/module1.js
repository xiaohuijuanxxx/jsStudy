import {b} from './module2';
var counter = 0;
export function a(n){
    counter ++;
    console.log(counter);
    
    return n == 0 || b(n-1);
}
// 1,2,3,false,4,5,6,true


exports.done = false;

var module2 = require('./module2.js');
console.log('在module1.js中，module2.done ='+module2.done);

exports.done = true;
console.log('module1.js执行完毕！')