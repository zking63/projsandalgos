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
myTrim(" Pl ayTha tF u nkyM usi c ")