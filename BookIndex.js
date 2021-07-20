//given a sorted array of pages, you return a string representing a book index
//e.g. given [1,3,4,5] you return "1, 3-5"

function BookIndex(arr){
    for (var i = 0; i < arr.length; i++){
        var next = arr[i + 1];
        var x = arr[i] + 1;
        if (next == x){
            console.log("this worked " + arr[i] + " " + arr[i +1]);
        }
    }
}

BookIndex([1,2,4,5,6])