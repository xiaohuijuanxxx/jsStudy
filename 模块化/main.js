import * as m from './module1.js';

var x = m.a(5);
console.log(x);

var y = m.a(4);
console.log(y);


//在循环加载中，只输出执行的部分，如a文件没执行完，只输出了done=false 第二次执行会直接走缓存
var module1 = require('./module1.js');
var module2 = require('./module2.js');

console.log('在main.js中，module1.done ='+module1.done,'在main.js中，module2.done ='+module2.done);