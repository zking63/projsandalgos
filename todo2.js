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

//rotate items in an array by a certain amount 
function rotate(arr, shift) {
	let t = Math.abs(shift);
	while(t > 0) {
		if(shift > 0) {
			let temp = arr[arr.length-1]
			
			for(i = arr.length - 1; i > 0; i--)
				arr[i] = arr[i-1];
			arr[0] = temp;

		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
        t--;
    }
    console.log(arr);
}
rotate([1,2,3], -2)

//recreate javascript's concat
function myConcat(arr2, arr3) {
    var newA = [];
	for(var i = 0; i < arr2.length; i++) {
        newA[i] = arr2[i];
    }
    for(var j=0; j<arr3.length;j++){
        newA[j+arr2.length]=arr3[j];
    }
    console.log(newA)
}
myConcat([1,2,0,3],[3,2,1,0])