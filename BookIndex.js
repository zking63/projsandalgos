//given a sorted array of pages, you return a string representing a book index
//e.g. given [1,3,4,5] you return "1, 3-5"

function BookIndex(arr){
    //iterate through array
    for (var i = 0; i < arr.length; i++){
        console.log("BIG LOOP: " + arr[i]);
        console.log("next= " + next);
        var count = 0;
        var head = arr[i];
        var next = arr[i + 1];
        var x = head + 1;
        var String;
        //check if the next value equals current value plus 1
        if (next == x){
            //continue to check if the value after the next value equals the next value plus 1
            while (next == x){
                console.log("next1= " + next);
                count++;
                console.log(head + " head");
                i++;
                head = arr[i];
                next = arr[i + 1];
                console.log(head + " head");
                console.log("count= " + count);
                x = next + 1;
            }
            console.log(head + " head after while loop");
            console.log(count + " count after while loop");
            console.log(next + " next after while loop");
            var number1 = head - count;
            console.log(number1 + " number1");
            var newString = number1 + "-" + next;
            console.log(newString + " newString");
            if (String == undefined){
                String = newString;
            }
            else {
                String = String + ", " + newString;
            }
            console.log(String + " String");
            i++;
        }
        else {
            if (String == undefined){
                String = head;
            }
            else {
                String = String + ", " + head;
            }
        }
    }
    console.log(String + " String");
    return String;
}

BookIndex([1,2,3,5,6,7,10,12,14,15,16])
console.log("FINAL: " + BookIndex([1,2,3,5,6,7,10,12,14,15,16]));