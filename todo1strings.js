//remove spaces in string
function myTrim(sent){
    var newS = sent.trim();
    var last = newS[0]
    for (var i = 1; i < newS.length; i++){
        if (newS[i] != " "){
            last = last + newS[i]
        }
    }
    console.log(last)
}
//get the integers of a string
function getDigits(str){
    var newp = ''
    for (var i = 0; i < str.length; i++){
        if (str[i] == "0" || str[i] == "1" || str[i] == "2" || str[i] == "3" || 
        str[i] == "4" || str[i] == "5" || str[i] == "6" || str[i] == "7" || str[i] == "8"
        || str[i] == "9"){
           newp = newp + str[i]
        }
    }
    console.log(newp)
}
//return string's acronym
function getAcronym(string1){
    var string2 = string1.trim();
    var new1 = string2[0]
    for (var i = 0; i <string2.length; i++){
        if (string2[i -1] == " "){
            new1 = new1 + string1[i]
        }
    }
    console.log(new1)
}
//count non-space digits or characters
function getNonSpace(string1){
    var string2 = string1.trim();
    var count = 0
    for (var i = 0; i <string2.length; i++){
        if (string2[i] != " "){
            count++
        }
    }
    console.log(count)
}
//remove any string in string array that is shorter than a given value
function removal(arr4){
    for (var i = 0; i <arr4.length; i++){
        if (arr4[i].length < arr4.length){
            delete arr4[i]
        }
    }
    console.log(arr4)
}
removal (["ok","work","now"])
getNonSpace("ok now ")
getAcronym("ok now work")
getDigits("1w4r5uu8")
myTrim(" Pl ayTha tF u nkyM usi c ")