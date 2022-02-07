// a instanceof b 判断a是否在b的原型链上
const myInstanceof = (obj, Fn) => {
    if (typeof obj !== 'object' || !obj) return false
    const structure = obj.__proto__
    if (structure !== Fn.prototype) {
        return myInstanceof(structure, Fn)
    } else {
        return true
    }
}