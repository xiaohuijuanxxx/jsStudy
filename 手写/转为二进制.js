let num = 5;

function transto(num){
    if(num==0) return 0;
    if(num==1) return 1;
    const res = [];
    too(num)
    return res.join('');

    function too(n){
        while(Math.floor(n/2) > 0){
            res.unshift(n%2);
            if(Math.floor(n/2)==1){
                res.unshift(1);
                too(1);
                break;
            }
            return too(Math.floor(n/2))
        }
        return;
    }

}

console.log(transto(3))