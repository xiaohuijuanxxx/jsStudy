(function myf(){
    let a = 1;
    function log(){
        console.log('x',a);
    }
    setTimeout(()=>{
        log()   
    })
})()

function myf2(){
    let a = 3;
    function log(){
        console.log('x',a);
    }
    log()
}
myf2()