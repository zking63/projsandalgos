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
getDigits("1w4r5uu8")
myTrim(" Pl ayTha tF u nkyM usi c ")