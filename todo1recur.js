//Write a recursive function that given a number returns the sum of integers from 1 
//to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function countUp(number){
    var sum = 0;
    for (var i = 1; i < number +1; i++){
        sum += i;
    }
    console.log(sum);
}
countUp(3)