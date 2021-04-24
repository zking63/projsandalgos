//Given a sorted array and a value, recursively determine whether value is found within array.
function rBinarySearch(numbers, value){
    for (var i = 0; i < numbers.length; i++){
        if (value == numbers[i]){
            return "true";
        }
    }
    return "false";
}
//Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common 
//Factor (the largest integer dividing evenly into both). Greek mathematician Euclid 
//demonstrated these facts:
function rGCF(value1, value2){
    var max = 0;
    var min = 0;
    var gcf = 0;
    if (value1 > value2){
        max = value1;
        min = value2;
    }
    else {
        max = value2;
        min = value1;
    }
    for (var i = min; i > 0; i--){
        while (min % i != 0 || max % i != 0){
            i--;
        }
        gcf = i;
    }
    return gcf
}
console.log(rGCF(5, 6));
console.log(rBinarySearch([1,4,5,6],4))