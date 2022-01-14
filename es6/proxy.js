/**
 * defineProperty能够监听对象的每一个属性，但是只能监听已存在的属性，对于新增和删除属性不能操作，需要借用Vue.set  Vue.delete
 * 
 * 
 * proxy&defineProtoperty
1.当给对象添加新属性时 proxy能监听到，definePrototype不能
2.proxy监听的是对象自身，definePrototype监听的是对象的每一个属性
3.defineProtoperty 需要遍历对象每一个属性，性能没有proxy好
*/
// defineProperty(obj,name,{
//     get(){},
//     set(){}
// })

/**
 * target 是要兼容的对象，可以是一个对象，数组，函数等
 * handler 是一个对象，对象里包含可以监听这个对象的行为函数，例如get set
 * 返回一个对象的新proxy 为了能够触发handler里面的函数，必须对这个创建出来的proxy进行操作，比如修改值
 */
// const proxy = new Proxy(target, handler)

//状态码封装
const message = {
    400:'请求错误',
    401:'系统未授权，请重新登录',
    403:'拒绝访问',
    404:'请求失败，找不到资源'
}

const proxy = new Proxy(message, {
    get(target, key){
        return target[key] || '系统异常，请联谊管理员'
    },
    set(target,key,value){
        target[key] = value
    }
})

console.log(proxy[400]) //请求错误
console.log(proxy[7003]) //系统异常，请联系管理员
console.log(message[7003]) //undefined  必须操作对象的代理，而不是对象本身
console.log(proxy[555] = '我是后加的')
console.log(proxy[555])
console.log(message)

