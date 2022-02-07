let timerId = {id: null};
function mySetInterval (cb, duration) {
    const preid = timerId;
    function fn(){
        cb();
        timerId.id = setTimeout(()=>{
            fn();
        },duration)
        clearTimeout(preid)
    }
    timerId.id = setTimeout(fn, duration)
    return timerId
}

function myclearInterval(id){
    clearTimeout(id.id)
}