//create a function that determines whether a stirng is a palindrome or not
//do not ignore, spaces, capitals, etc. 

function palindrome(input){
    var input1 = input;
    var input2;
    console.log(input.length);
    for (var i = input.length -1; i >= 0; i--){
        console.log(input[i]);
    }
}
palindrome("string")