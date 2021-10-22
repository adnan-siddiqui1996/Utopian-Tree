function utopianTree(n) {
    let temp = 0;
    let arr = []
    for(let i = 0; i <= n; i++){
        if(i === 0){
            temp = 1;
        }
        else if(i % 2 !== 0){
            temp = temp * 2;
        }
        else{
            temp = temp + 1;
        }
        arr.push(temp);
    }   
    return arr[n];
}

console.log(utopianTree(9));