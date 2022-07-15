function count_char(str, c){
    let count =0;
    for(let i=0; i<str.length; i++) {
        if(c===str[i]){
            count++
        }
    };
    return count;
}
console.log(count_char("sepak bola","a"))