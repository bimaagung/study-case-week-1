
function factorial(angka1){  
    var result =1;
             
    for (var i = 2; i <= angka1; i++){
        result = result * i;
    }
    return result;  
}

console.log(factorial(3))
