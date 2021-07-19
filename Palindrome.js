//create a function that determines whether a stirng is a palindrome or not
//do not ignore, spaces, capitals, etc. 
//this is O(n)
function palindrome(input){
    var input2 = 0;
    for (var i = input.length -1; i >= 0; i--){
        if (input2 == 0){
            input2 = input[i];
        }
        else {
            input2 += input[i];
        }
    }
    return Boolean(input2 == input);
}
console.log(palindrome("racecar"))
console.log(palindrome("rac ecar"))