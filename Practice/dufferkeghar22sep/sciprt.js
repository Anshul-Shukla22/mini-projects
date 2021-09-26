var input=document.querySelector("input");
var arr=["hey","how are you","bhagoo"];

function show(elem){
    var temp=``;
    elem.forEach(function(dets){

    
    temp+=` <div id="chat">${dets}</div>
    
    `
document.querySelector("#panel").innerHTML=temp;
    })
}

input.addEventListener("input",function(val){
    var arr2=[];
    console.log(input.value)
    arr.forEach(function(vals){
        if(vals.indexOf(input.value)!==-1){
            arr2.push(vals)
    
        }
        show(arr2)
       

    })
    


})
show(arr);