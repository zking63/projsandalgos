//Given a sorted array and a value, recursively determine whether value is found within array.
function rBinarySearch(numbers, value){
    for (var i = 0; i < numbers.length; i++){
        if (value == numbers[i]){
            return "true";
        }
    }
    return "false";
}
console.log(rBinarySearch([1,4,5,6],4))