// 实例化webworker
// 接受一个 filepathname String 参数，用于指定 Worker 脚本文件的路径；
let worker = new Worker('./worker.js')

/**
web worker
1. new Worker('./xxx.js') //参数为worker脚本路径
2. Javascript是单线程，无法同时运行多个脚本。假设用户点击一个按钮，触发了一段用于计算的Javascript代码，那么在这段代码执行完毕之前，页面是无法响应用户操作的。但是，如果将这段代码交给Web Worker去运行的话，浏览器会在后台启动一个独立的worker线程来专门负责这段代码的运行，因此，页面在这段Javascript代码运行期间依然可以响应用户的其他操作

web worker允许js在主线程之外的线程中运行

 Web Worker 规范中定义了两类工作线程
1.专用线程Dedicated Worker 只能为一个页面所使用
2.共享线程 Shared Worker，可以被多个页面所共享。
me💫:
postMessage+onMessgae 传递的数据不是共享，是复制！！
所以并不是指向同一个对象，在一端修改数据不会影响到另一端

worker.terminate(); 终止

worker.onerror = function () {} 监听错误

 */