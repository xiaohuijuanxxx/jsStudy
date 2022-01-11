/**
*1.节流：高频事件触发，每隔n秒执行一次，n秒间隔内再次触发，也不会重新计算时间
 */

//方法一：时间戳版
function throttle(fn, delay){
    let start = 0;
    return function(){
        let end = Date.now();
        if(end >= start+delay){
            fn.apply(this, [...arguments]);
            end = start;
        }else{
            console.log('间隔时间不够');
        }
    }
}
function resize(){
    console.log('窗口大小改变了');
}
Window.addEventListener('resize', throttle(resize,500))

//方法二：定时器 设置一个标志，标志时间是否走完
function throttle2(fn, delay){
    let time;
    return function(){
        if(time) return;
        time = setTimeout(()=>{
            fn.apply(this, [...arguments])
            time = null;
        }, delay)
    }
}

/**
 * 2.防抖：高频事件触发，如果n秒内事件被再次触发，则会重新计算时间，每次触发之前都取消之前的延时调用方法
 */
function debounce(fn, delay){
    let time
    return function(){
        clearTimeout(time)
        time = setTimeout(()=>{
            fn.apply(this, [...arguments])
        },delay)
    }
}