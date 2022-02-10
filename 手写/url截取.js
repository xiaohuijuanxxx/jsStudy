let url = 'www.guxueying.online?name=xueying&age=18'

function splitUrl(str){
    let obj = {};
    if(str.indexOf('?')!==-1){
        let mid = str.split('?');
        if(mid.length==2){
            let paramsStr = mid[1].split('&');
            for(let i=0; i<paramsStr.length; i++){
                obj[paramsStr[i].split('=')[0]] = paramsStr[i].split('=')[1]
            }   
        } 
    }
    return obj;
}
console.log(splitUrl(url));
