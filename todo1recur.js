//Write a recursive function that given a number returns the sum of integers from 1 
//to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function countUp(number){
    var sum = 0;
    for (var i = 1; i < number +1; i++){
        sum += i;
    }
    console.log(sum);
}
//Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. 
//If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). 
//Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function getproduct(number){
    var finalN = Math.round(number)
    var product = 1;
    for (var i = 1; i < finalN +1; i++){
        product = product * i;
    }
    console.log(product);
}
countUp(3)
getproduct(3.5)
getproduct(0)