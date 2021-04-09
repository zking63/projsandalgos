//min to the front of the array
var arr = [1,3,8,-5,0,-2,4,-1];
var min = arr[0];
for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(min);