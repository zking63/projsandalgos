//create an function that, given an input string, 
//returns a boolean whether parenthesis in that string are valid
//this is O(n)
var input = "(y(((9)1)"
function Parens(input){
    var p1count = 0;
    var p2count = 0;
    for (var i = 0; i < input.length; i++){
        if (input[i] == "("){
            p1count += 1;
        }
        if (input[i] == ")"){
            p2count += 1;
        }
    }
    return Boolean(p1count == p2count);
}
console.log(Parens(input));