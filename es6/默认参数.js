let x = 1;
function func(y=x){
    let x = 2;
    console.log(y); //1
}
//没有传参数，默认参数y的值就是x 会在作用域中找这个x为1
func()


let w = 1, z = 2
function fun2(x = w + 1, y = x + 1, z = z+1){
    //x是2， y是3
    console.log(x,y,z);
     //Uncaught ReferenceError: Cannot access 'z' before initialization
}
fun2()