function bigestSumOfTwoElemenets(arr) {
    if(arr.length === 1) return arr[0];
    if(arr.length === 0) return false;
    arr.sort();
    let max_nr = 0;
    let max_nr1 = 0;
    let result = 0;
    max_nr = arr[arr.length - 1]
    max_nr1 = arr[arr.length - 2] 
    result = max_nr + max_nr1
    return result
}
console.log(bigestSumOfTwoElemenets([1,2,3,4,5]))