let arr = [3,4,1,6];

function valueSecondMax(arr){

    let arrShort = arr.sort();
    let positionIndex = 0;
    let valueMax =  Math.max(...arrShort);
    let result = 0;

    if(arrShort.length < 2){
        return 0;
    }else{
    for(i = 0; i < arrShort.length; i++){

        if(arrShort[i] === valueMax){
            positionIndex = i-1;
        }

    }

     return arrShort[positionIndex];
    }

}

console.log(valueSecondMax(arr));
