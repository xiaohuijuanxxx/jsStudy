let arr = [1,1,2,7,1,4,5,2,6,9,0,0]

// //方法1 双层for循环+逆序遍历
// function noRepeat(arr){
//     for(let i=arr.length-1;i>0;i--){
//         for(let j=i-1;j>=0;j--){
//             if(arr[i] == arr[j]){
//                 arr.splice(j,1)
//             }
//         }
//     }
//     return arr
// }
// console.log(noRepeat(arr))

// //方法二：排序+逆序遍历
// function noRepeat1(arr){
//     arr.sort() //默认升序
//     for(let i=arr.length-1;i>0;i--){
//         if(arr[i]==arr[i-1]){
//             arr.splice(i-1,1)
//         }
//     }
//     return arr
// }
// console.log(noRepeat1(arr));

//方法三：借助空间法 Map,Array
function noRepeat2(arr){
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}
console.log(noRepeat2(arr));

//方法4：filter+indexOf
function noRepeat3(arr){
    return arr.filter((item,index)=>{
        return arr.indexOf(item)===index
    })
}
console.log(noRepeat3(arr));