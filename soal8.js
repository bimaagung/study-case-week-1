function count_vocal(str){
    let vocal = 'aeiou';
    let vocalCount = 0;
    for (var i = 0; i <= str.length - 1; i++) {
        if (vocal.includes(str[i].toLowerCase())) {
          vocalCount += 1;
        }
      }

    return vocalCount;
}

console.log(count_vocal("manado"))
