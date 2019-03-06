function largestSubarraySum(arr){
    let subArr = [0]
    for(let i=1; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1; j++)
            if( sumArr(arr.slice(i,j)) > sumArr(subArr)){
                subArr = arr.slice(i,j)
       }  
    }
    return sumArr(subArr)
}

function sumArr(subArr){
    return subArr.reduce((a,b) => a+b,0)
}