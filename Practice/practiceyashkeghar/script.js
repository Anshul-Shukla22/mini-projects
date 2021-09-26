var arr=[{name:"phone",category:1},
{name:"laptop",category:1},
{name:"tablet",category:2},
{name:"tv",category:2}]


var cat1=arr.filter(function(val){
    return val.category===1;
})

var cat2=arr.filter(function(val){
    return val.category===2;
})

function show(elem){
    var temp=``;
    elem.forEach(function(dets){
        
        temp+=`<div id="div">${dets.name}</div>`;
        document.querySelector("#panel").innerHTML=temp;
    })
}

document.querySelector('#cat1').addEventListener('click',function(){
    show(cat1);
})

document.querySelector('#cat2').addEventListener('click',function(){
    show(cat2);
})