let arr = [1,2,,[1,3,[4,5,[3]]]]

//方法一：flat(num) num是维度 
//不修改原数组
//不传参时，默认拉平一层，传参小于0时，不拉平
//有空位null 会跳过空位
arr.flat(Infinity)

//方法二：toString()转字符串
// toString 后会变成'1,2,1,3,4,5,3'
arr.toString().split(',')

//方法三：循环递归 不会跳过空位
function myFlat(arr,num){
    if(num>0){
        let res = [];
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                res = res.concat(myFlat(arr[i],num-1))
            }else{
                res.push(arr[i])
            }
        }
        return res
    }else{
        return arr.slice()
    }
    
}
console.log(myFlat(arr,0));

//reduce实现
function myFlat1(arr,num){
    if(num > 0){
        return arr.reduce((pre,cur)=>{
            return pre.concat(Array.isArray(cur) ? myFlat1(cur, num-1) : cur)
        },[])
    }else{
        return arr.slice()
    }
    
}
console.log(myFlat1(arr,1));


