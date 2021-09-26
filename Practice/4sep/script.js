var inc=document.querySelector("#inc");
var dec=document.querySelector("#dec");
var circle=document.querySelector("#circle");
var color=document.querySelector('#color');
var a=document.querySelector("#a");
var b=document.querySelector("#b");
var c=document.querySelector("#c");
var btn=document.querySelector("#calc");
var panel=document.querySelector("#panel");

var selectedColor;
var items=0;
var temp=``;

// function increment(){
//      items=items+1;
//      circle.textContent=items;

// }
// function decrement(){
//     items=items-1;
//     circle.textContent=items;

// }

// inc.addEventListener('click',function(){
//     if(items>-1){
//         increment();
//     }
//     else{}

// })

// dec.addEventListener('click',function(){
//     if(items>0){
//         decrement();
//     }
//     else{}
    
// })


function calc(){
    btn.addEventListener('click',function(){
        // console.log(Number(a.value),Number(b.value),Number(c.value));
        
        selectedColor = `rgb(${Number(a.value)},${Number(b.value)},${Number(c.value)})`;
        color.style.backgroundColor=selectedColor;
        
    })
}

function colorClicked(){
    color.addEventListener('click',function(){
        temp+=` <div id="circle" style="background-color:${selectedColor};"></div>`;
        panel.innerHTML=temp;
        // console.log(selectedColor);
    })
}

calc();
colorClicked();


