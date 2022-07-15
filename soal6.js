const arr = ['javascript', 'java', 'python', 'php'];

function countChar(arr){
 
    let text1;
    let countMax = Math.max(...(arr.map(x => x.length)));
    for(i = 0; i < arr.length; i++){
        if(arr[i].length === countMax){
            text1 = arr[i];
        }
    }
    return text1;
}
console.log(countChar(arr));
