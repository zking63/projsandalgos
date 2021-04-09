//reverse the array
var arr1 = [1,2,0,3]
var newArr = [];
var back = arr1[arr1.length -1]
var firstletter = arr1[0]
newArr.push(back)
for (var i = arr1.length -2; i > 0; i--){
    var letter = arr1[i];
    newArr.push(letter)
}
newArr.push(firstletter);
console.log(newArr);