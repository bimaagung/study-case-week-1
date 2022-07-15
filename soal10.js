let arr =[3,5,7,3]

function mean(arr){
    let totalArray = 0;
    console.log(totalArray);

    for (let i = 0; i < arr.length; i += 1) {
        totalArray += arr[i];
    }

    return totalArray / arr.length;
}

console.log(mean(arr))