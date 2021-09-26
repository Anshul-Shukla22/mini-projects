var arr=[{likes:0},{likes:0},{likes:0}]

function show(){
    var temp=``;
    arr.forEach(function(dets,index){
        temp+=`<div id="panel"><button id=${index}>like++</button><label for="text">${dets.likes}likes</label></div>`
        document.querySelector('#main').innerHTML=temp;
        // document.querySelector('label').textContent=arr.likes;
    })
}

document.querySelector('#main').addEventListener('click',function(dets){

    arr[dets.target.id].likes++;
    show();
})

show();