
var basedata='aeiouAEIOU';

function counter(str){
    var count=0;
    for(var i=0; i<str.length; i++){
         if(basedata.indexOf(str[i]) !== -1) count++;
    }
    return count;
}

var count=0;
function counter(str){
    for(var i=0;i<str.length;i++){
       if(basedata.indexOf(str[i])!==-1){
           count++;
       }

    }
    return count;
}